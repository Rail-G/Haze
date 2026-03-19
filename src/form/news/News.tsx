'use client'
import { JSX, useState } from "react";
import styles from '@/form/common/common.module.scss'
import Icon from "@/components/icon/Icon";
import Button from "@/components/button/Button";
import 'suneditor/dist/css/suneditor.min.css';
import lang from 'suneditor/src/lang'
import dynamic from "next/dynamic";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsSchema } from "@/schemas/news.schema";
import z from "zod";
import Loader from "@/components/loader/Loader";

const SunEditor = dynamic(() => import("suneditor-react"), {
    loading: () => <Loader />,
    ssr: false,
});

export default function NewsForm(): JSX.Element {
    const [filesCount, setFilesCount] = useState(0);
    const { register, handleSubmit, setValue, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            category: '',
            image: undefined,
            text: ''
        },
        resolver: zodResolver(newsSchema)
    })
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setFilesCount(files.length);
            setValue('image', files[0])
        }
        if (errors.image) {
            errors.image.message = ''
        }
    };

    const onSubmit: SubmitHandler<z.infer<typeof newsSchema>> = (data) => {
        console.log(data)
        alert('Good!')
    }
    return (
        <div className={styles.popup}>
            <div className={`${styles.block} ${styles['news-block']}`}>
                <div className={styles['close-btn']}>
                    <Icon iconName="minus" width='25px' height='25px' />
                </div>
                <div className={styles.header}>
                    <h2 className={styles.title}>Создание новости</h2>
                </div>
                <form onSubmit={(e) => {e.preventDefault(); console.log(5); console.log(errors); handleSubmit(onSubmit)(e);}} noValidate>
                    <div className={styles['form-block']}>
                        <div className={styles['form-column']}>
                            <div className={styles['form-row']}>
                                <label htmlFor="title" className={styles.label}>Заголовок новости</label>
                                <input {...register('title')} type="text" id="title" name="title" className={styles.input} placeholder="Почистить снег" required />
                                {errors.title && <p className={`${styles.tip} ${styles.error}`}>{errors.title.message}</p>}
                            </div>
                            <div className={styles['form-row']}>
                                <label htmlFor="category" className={styles.label}>Категория</label>
                                <input {...register('category')} type="text" id="category" name="category" className={styles.input} placeholder="Почистить снег" required />
                                {errors.category && <p className={`${styles.tip} ${styles.error}`}>{errors.category.message}</p>}
                            </div>
                            <div className={styles['form-row']}>
                                <label className={styles.label}>Фото обложки</label>
                                <div>
                                    <label htmlFor="image" className={styles['file-input']}>
                                        Выбрать фото
                                    </label>
                                    <input {...register('image')} type="file" name="image" id="image" onChange={onFileChange} accept="image/png, image/jpg, image/jpeg" />
                                    {filesCount != 0 && <span className={styles['inform-text']}>Загружено {filesCount} фото</span>}
                                    {errors.image && <p className={`${styles.tip} ${styles.error}`}>{errors.image.message}</p>}
                                </div>
                            </div>
                        </div>
                        <div className={styles['form-column']}>
                            <div className={`${styles['form-row']} ${styles['editor-row']}`}>
                                <label htmlFor="textArea" className={styles.label}>
                                    Текст новост
                                    {errors.text && <span className={`${styles.tip} ${styles.error}`}>{errors.text.message}</span>}
                                </label>
                                <div className={`${styles.input} ${styles['editor-plugin']}`}>
                                    <Controller
                                        name="text"
                                        control={control}
                                        defaultValue={''}
                                        render={({ field: { onChange, value } }) => (
                                            <SunEditor
                                                onChange={(content) => onChange(content)}
                                                setContents={value}
                                                lang={lang.ru}
                                                height="100%"
                                                width="100%"
                                                setOptions={{
                                                    buttonList: [
                                                        ['undo', 'redo', 'removeFormat'],
                                                        ['bold', 'underline', 'italic', 'strike'],
                                                        ['list', 'lineHeight', 'horizontalRule', 'align'],
                                                        ['font', 'fontSize'],
                                                        ['fontColor', 'hiliteColor', 'textStyle'],
                                                        ['table', 'image', 'link', 'preview', 'codeView']
                                                    ],
                                                    className: `${styles['editor-style']}`
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button type="submit" title="Опубликовать новость" className={styles.button}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
