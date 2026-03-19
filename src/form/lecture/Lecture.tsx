'use client'
import { JSX, useState } from "react";
import styles from '@/form/common/common.module.scss'
import Icon from "@/components/icon/Icon";
import Button from "@/components/button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { lectureSchema } from "@/schemas/lecture.schema";
import z from "zod";

export default function LectureForm(): JSX.Element {
    const [filesCount, setFilesCount] = useState(0);
    // const [radioValue, setRadioValue] = useState('Не присутствовал')
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
            defaultValues: {
                count: '',
                intervention: '',
                images: []
            },
            resolver: zodResolver(lectureSchema)
        })
    // const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value
    //     setRadioValue(value)
    //     setValue('intervention', value)
    // }
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (files) {
                setFilesCount(files.length);
                setValue('images', [...files])
            }
            if (errors.images) {
                errors.images.message = ''
            }
        };
        const onSubmit: SubmitHandler<z.infer<typeof lectureSchema>> = (data) => {
            console.log(data)
        }
    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <div className={styles['close-btn']}>
                    <Icon iconName="minus" width='25px' height='25px'/>
                </div>
                <div className={styles.header}>
                    <h2 className={styles.title}>Отчет об обучении</h2>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); console.log(5); console.log(errors); handleSubmit(onSubmit)(e); }} noValidate>
                    <div>
                        <div className={styles['form-row']}>
                            <label htmlFor="count" className={`${styles.label} ${styles.require}`}>Количество обученных студентов</label>
                            <input {...register('count')} type="number" id="count" name="count" className={styles.input} placeholder="Введите цифру" required />
                            {errors.count && <p className={`${styles.tip} ${styles.error}`}>{errors.count.message}</p>}
                        </div>
                        <div className={styles['form-row']}>
                            <label className={styles.label}>Вмешательство стороних лекторов</label>
                            <div className={styles['radio-block']}>
                                <label className={styles.radio}>
                                    <input {...register('intervention')} type="radio" id="intervention" name="intervention" className={`${styles.input} ${styles['radio-input']}`} value={'Присутствовал'} />
                                    Было
                                </label>
                                <label className={styles.radio}>
                                    <input {...register('intervention')} type="radio" id="intervention" name="intervention" className={`${styles.input} ${styles['radio-input']}`} value={'Не присутствовал'} defaultChecked/>
                                    Не было
                                </label>
                            </div>
                        </div>
                        <div className={styles['form-row']}>
                            <label className={styles.label}>Фото отчет</label>
                            <div>
                                <label htmlFor="images" className={styles['file-input']}>
                                    Выбрать фото
                                </label>
                                <input {...register('images')} onChange={onFileChange} type="file" name="images" id="images" accept="image/png, image/jpg, image/jpeg" multiple/>
                            </div>
                            {filesCount != 0 && <span className={styles['inform-text']}>Загружено {filesCount} фото</span>}
                            {errors.images && <p className={`${styles.tip} ${styles.error}`}>{errors.images.message}</p>}
                        </div>
                        <div>
                            <Button type="submit" title="Отправить отчет" className={styles.button}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}