'use client'
import { JSX, useState } from "react";
import styles from '@/form/common/common.module.scss'
import Icon from "@/components/icon/Icon";
import Button from "@/components/button/Button";
import 'suneditor/dist/css/suneditor.min.css';
import lang from 'suneditor/src/lang'
import dynamic from "next/dynamic";

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

export default function NewsForm(): JSX.Element {
    const [state, setState] = useState(null)
    const handleChange = (content) => {
        setState(content)
    }
    const onClick = () => console.log(state)
    return (
        <div className={styles.popup}>
            <div className={`${styles.block} ${styles['news-block']}`}>
                <div className={styles['close-btn']}>
                    <Icon iconName="minus" width='25px' height='25px' />
                </div>
                <div className={styles.header}>
                    <h2 className={styles.title}>Создание новости</h2>
                </div>
                <form noValidate>
                    <div className={styles['form-block']}>
                        <div className={styles['form-column']}>
                            <div className={styles['form-row']}>
                                <label htmlFor="text" className={styles.label}>Заголовок новости</label>
                                <input type="text" id="text" name="text" className={styles.input} placeholder="Почистить снег" required />
                            </div>
                            <div className={styles['form-row']}>
                                <label htmlFor="text" className={styles.label}>Категория</label>
                                <input type="text" id="text" name="text" className={styles.input} placeholder="Почистить снег" required />
                            </div>
                            <div className={styles['form-row']}>
                                <label className={styles.label}>Фото обложки</label>
                                <div>
                                    <label htmlFor="file" className={styles['file-input']}>
                                        Выбрать фото
                                    </label>
                                    <input type="file" name="file" id="file" accept="image/png, image/jpg, image/jpeg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles['form-column']}>
                            <div className={styles['form-row']}>
                                <label htmlFor="textArea" className={styles.label}>Текст новости</label>
                                <div className={`${styles.input} ${styles['editor-plugin']}`}>
                                    <SunEditor
                                        onChange={handleChange}
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button type="button" title="Опубликовать новость" className={styles.button} onClick={onClick}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
