import Image from "next/image";
import { JSX } from "react";
import styles from './taskCard.module.scss'
import Button from "../button/Button";

interface ITaskCard {
    image: string,
    title: string,
    reward: number,
    status: string,
    condition: string[] | null,
    description: string
}

export default function TaskCard({image, title, reward, status, condition, description}: ITaskCard): JSX.Element {
    return (
        <div className={styles.card}>
            {status == 'progress' && <div className={`${styles.status} ${styles.progress}`}>
                Выполняется игроком Rail Diablo
            </div>}
            {status == 'done' && <div className={`${styles.status} ${styles.done}`}>
                Выполнено игроком Rail Diablo
            </div>}
            {status == 'waiting' && <div className={`${styles.status} ${styles.waiting}`}>
                В ожидании подтверждения
            </div>}
            {status == 'error' && <div className={`${styles.status} ${styles.error}`}>
                Время выполнения истекло
            </div>}
            <Image src={image} className={styles.image} width={100} height={150} alt="default" />
            <div className={styles.body}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
                <span className={styles.reward}>Награда: <span className={styles.value}>{reward.toLocaleString('de-DE')}$</span></span>
                <div className={styles['condition-block']}>
                    <h5 className={styles.title}>Дополнительные условия</h5>
                    {condition != null 
                    ? <ul className={styles.list}>
                        {condition.map((item) => {
                            return <li key={item}>{item}</li>
                        })}
                    </ul>
                    : <span>Отсутствуют</span>}
                </div>
                <Button className={styles.button} title="Принять задания" />
            </div>
        </div>
    )
}