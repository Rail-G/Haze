import { JSX } from "react";
import styles from './infoBlockItem.module.scss'

interface IInfoBlockItem {
    title: string,
    description: string
}

export default function InfoBlockItem({title, description}: IInfoBlockItem): JSX.Element {
    return (
        <div className={styles['info-item']}>
            <span className={styles['info-title']}>{title}</span>
            <span className={styles['info-description']}>{description}</span>
        </div>
    )
}