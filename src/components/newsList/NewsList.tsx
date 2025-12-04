import { JSX } from "react";
import styles from './newsList.module.scss'
import NewsItem from "../newsItem/NewsItem";
import { siteConfig } from "@/config/site.config";

export default function NewsList(): JSX.Element {
    return (
        <div className={styles['news-list']}>
            <ul className={styles.items}>
            {siteConfig.newsItems.map(({image, title, information}) => {
                return <li key={title}><NewsItem image={image} title={title} category={information[0].category}/></li>
            })}
            </ul>
        </div>
    )
}