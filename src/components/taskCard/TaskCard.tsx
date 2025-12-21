import Image from "next/image";
import { JSX } from "react";
import styles from './taskCard.module.scss'

export default function TaskCard(): JSX.Element {
    return (
        <div className={styles.card}>
            <Image src='/default.jpg' className={styles.image} width={100} height={150} alt="default"/>
            <div className={styles.body}>
                <h4 className={styles.title}>Целеовой инструктаж по паразитам "CA-23"</h4>
                <p className={styles.description}>В течении с 13.05.2024 по 18.05.2024, обучить 10 учеников в нашей библиотеке по адресу "s 48"</p>
                <span className={styles.reward}>Награда: <span className={styles.value}>20.000$</span></span>
                <div className={styles['condition-block']}>
                    <h5 className={styles.title}>Дополнительные условия</h5>
                    <ul className={styles.list}>
                        <li>Быть лысым</li>
                        <li>Не быть лысым</li>
                        <li>Иметь админ права по утилизации</li>
                    </ul>
                </div>
                <button className={styles.button}>Принять задания</button>
            </div>
        </div>
    )
}