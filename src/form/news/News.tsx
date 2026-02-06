import { JSX } from "react";
import styles from './news.module.scss'
import Icon from "@/components/icon/Icon";

export default function NewsForm(): JSX.Element {
    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <div className={styles['close-btn']}>
                    <Icon iconName="minus" width='25px' height='25px'/>
                </div>
                <div className={styles.header}>
                    <h2 className={styles.title}>Создание новости</h2>
                </div>
                <form noValidate>
                    <div className={styles['form-block']}>
                        <div className={styles['form-row']}>
                            <label htmlFor="text" className={styles.label}>Заголовок новости</label>
                            <input type="text" id="text" name="text" className={styles.input} placeholder="Почистить снег" required />
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="textArea" className={styles.label}>Текст новости</label>
                            <textarea id="textArea" name="textArea" className={styles.input} placeholder="Сегодня я решил почистить снего, потому что..." required />
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
                                <input type="file" name="file" id="file" accept="image/png, image/jpg, image/jpeg"/>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className={styles.button}>Опубликовать новость</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}