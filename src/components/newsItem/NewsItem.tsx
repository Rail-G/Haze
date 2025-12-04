import { JSX } from "react";
import styles from './newsItem.module.scss'
import Image from "next/image";

interface INewsItem {
    image: string,
    title: string,
    category: string
}

export default function NewsItem({image, title, category}: INewsItem): JSX.Element {
    return (
        <div className={styles['news-item']}>
            <Image src={image} width={0} height={0} className={styles.image} alt="delegaciya"/>
            <h4 className={styles.title}>{title}</h4>
            <span className={styles.category}>{category}</span>
            <button className={styles.button}>Читать</button>
        </div>
    )
}