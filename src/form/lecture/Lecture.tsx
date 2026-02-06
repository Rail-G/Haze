import { JSX } from "react";
import styles from './lecture.module.scss'
import Icon from "@/components/icon/Icon";

export default function LectureForm(): JSX.Element {
    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <div className={styles['close-btn']}>
                    <Icon iconName="minus" width='25px' height='25px'/>
                </div>
                <div className={styles.header}>
                    <h2 className={styles.title}>Отчет об обучении</h2>
                </div>
                <form noValidate>
                    <div className={styles['form-block']}>
                        <div className={styles['form-row']}>
                            <label htmlFor="count" className={`${styles.label} ${styles.require}`}>Количество обученных студентов</label>
                            <input type="number" id="count" name="count" className={styles.input} placeholder="Введите цифру" required />
                        </div>
                        <div className={styles['form-row']}>
                            <label className={styles.label}>Вмешательство стороних лекторов</label>
                            <div className={styles['radio-block']}>
                                <label className={styles.radio}>
                                    <input type="radio" id="count" name="intervention" className={`${styles.input} ${styles['radio-input']}`} placeholder="••••••••" value={1} />
                                    Было
                                </label>
                                <label className={styles.radio}>
                                    <input type="radio" id="count" name="intervention" className={`${styles.input} ${styles['radio-input']}`} placeholder="••••••••" value={0} defaultChecked/>
                                    Не было
                                </label>
                            </div>
                        </div>
                        <div className={styles['form-row']}>
                            <label className={styles.label}>Фото отчет</label>
                            <div>
                                <label htmlFor="file" className={styles['file-input']}>
                                    Выбрать фото
                                </label>
                                <input type="file" name="file" id="file" accept="image/png, image/jpg, image/jpeg" multiple/>
                            </div>
                            <span className={styles['inform-text']}>Загружено 5 фото</span>
                        </div>
                        <div>
                            <button type="submit" className={styles.button}>Отправить отчет</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}