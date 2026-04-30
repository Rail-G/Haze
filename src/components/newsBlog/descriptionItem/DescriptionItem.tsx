import { JSX } from "react";
import styles from './descriptionItem.module.scss'

interface IDescriptionItem {
    title: string,
    description: string
}

export default function DescriptionItem({title, description}: IDescriptionItem): JSX.Element {
    return (
        <div className={styles['description-item']}>
            <span className={styles.title}>{title}</span>
            <span className={styles.description}>{description}</span>
        </div>
    )
}