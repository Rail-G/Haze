import { JSX } from "react";
import styles from './newsItem.module.scss'
import Image from "next/image";
import Button from "../button/Button";

interface INewsItem {
    imagePath: string,
    title: string,
    category: string
}

export default function NewsItem({imagePath, title, category}: INewsItem): JSX.Element {
    return (
        <div className={styles['news-item']}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/${imagePath}`} width={150} height={120} className={styles.image} unoptimized alt="delegaciya"/>
            <h4 className={styles.title}>{title}</h4>
            <span className={styles.category}>{category}</span>
            <Button className={styles.button} title="Читать"/>
        </div>
    )
}