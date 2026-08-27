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
                <Image src={'/profile.png'} className={styles['profile-img']} width={250} height={250} alt="profile image"/>
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
                        <li><ImagePopup src={'/default.jpg'} /></li>
                        <li><ImagePopup src={'/default.jpg'} /></li>
                        <li><ImagePopup src={'/default.jpg'} /></li>
                        <li><ImagePopup src={'/default.jpg'} /></li>
                        <li><ImagePopup src={'/default.jpg'} /></li>
                        {/* <li><ImagePopup src={'/default.jpg'} /></li> */}
                        {/* <li><ImagePopup src={'/default.jpg'} /></li> */}
                        {/* <li><ImagePopup src={'/default.jpg'} /></li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}