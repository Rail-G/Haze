'use client'
import { JSX } from "react";
import styles from './newsBlog.module.scss'
import Image from "next/image";
import { useNewsStore } from "@/store/news.store";
import DOMPurify from 'dompurify'
import Loader from "../loader/Loader";
import DescriptionItem from "./descriptionItem/DescriptionItem";

export default function NewsBlog(): JSX.Element {
    const { htmlBody } = useNewsStore()
    return (
        <div className={styles['news-blog']}>
            <div className={styles.header}>
                <div className={styles['image-bg']}>
                    <Image src='/default.jpg' className={styles.image} width="670" height="400" alt='delegaciya' />
                </div>
                <h3>Проникновения в зал корпорации</h3>
            </div>
            <div className={styles['blog-body']}>
                <div className={styles['news-body']}>
                    <div className={styles['news-content']}>
                        {htmlBody
                            ? <div className={styles['news-desc']} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlBody) }}></div>
                            : <Loader />
                        }
                    </div>
                </div>
                <div className={styles['news-body']}>
                    <div className={styles['news-description']}>
                        <ul className={styles['description-items']}>
                            <li>
                                <DescriptionItem title="Published Date" description={'00.00.0000'} />
                            </li>
                            <li>
                                <DescriptionItem title="Category" description={'Corporation'} />
                            </li>
                            <li>
                                <DescriptionItem title="Author" description={'Rail Diablo'} />
                            </li>
                        </ul>
                    </div>
                    <div className={styles['news-links']}>
                        <span className={styles.title}>Table of Contents</span>
                        <ul className={styles['news-items']}>
                            <li>Test news link</li>
                            <li>Test news link</li>
                            <li>Test news link</li>
                            <li>Test news link</li>
                            <li>Test news link</li>
                            <li>Test news link</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}