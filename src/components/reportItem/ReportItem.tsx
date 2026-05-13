import { JSX } from "react";
import styles from './reportItem.module.scss'
import Image from "next/image";
import ImagePopup from "../imagePopup/ImagePopup";

export default function ReportItem(): JSX.Element {
    return (
        <div className={styles.block}>
            <div className={styles['user-block']}>
                <span className={styles.author}>Rail Diablo</span>
                <span className={styles.role}>Second-class Scientific Squad </span>
            </div>
            <div className={styles['info-block']}>
                <div className={styles.head}>
                    <span className={styles.date}>Опубликовано: 7 декабря 2026 в 16:36</span>
                    <div className={styles['button-block']}>
                        <button className={`${styles.button} ${styles.edit}`}>Изменить</button>
                        <button className={`${styles.button} ${styles.delete}`}>Удалить</button>
                    </div>
                </div>
                <span>Количество обученных студентов: {8}</span>
                <span>Вмешательство со стороны других лекторов: {'Было'}</span>
                <div className={styles['img-block']}>
                    <span>Фото отчет</span>
                    <ul className={styles.list}>
                        <li><ImagePopup><Image className={styles.img} src='/default.jpg' width={1000} height={500} alt="report img"/></ImagePopup></li>
                        <li><ImagePopup><Image className={styles.img} src='/default.jpg' width={1000} height={500} alt="report img"/></ImagePopup></li>
                        <li><ImagePopup><Image className={styles.img} src='/default.jpg' width={1000} height={500} alt="report img"/></ImagePopup></li>
                        <li><ImagePopup><Image className={styles.img} src='/default.jpg' width={1000} height={500} alt="report img"/></ImagePopup></li>
                        <li><ImagePopup><Image className={styles.img} src='/default.jpg' width={1000} height={500} alt="report img"/></ImagePopup></li>
                        <li><ImagePopup><Image className={styles.img} src='/default.jpg' width={1000} height={500} alt="report img"/></ImagePopup></li>
                        <li><ImagePopup><Image className={styles.img} src='/default.jpg' width={1000} height={500} alt="report img"/></ImagePopup></li>
                        <li><ImagePopup><Image className={styles.img} src='/default.jpg' width={1000} height={500} alt="report img"/></ImagePopup></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}