'use client'
import { JSX } from "react";
import styles from './newsBlog.module.scss'
import Image from "next/image";
import { useNewsStore } from "@/store/news.store";
import DOMPurify from 'dompurify'
import Loader from "../loader/Loader";
import DescriptionItem from "./descriptionItem/DescriptionItem";
import { useQuery } from "@tanstack/react-query";
import { newsService } from "@/services/news.service";
import NewsLink from "./newsLink/NewsLink";

export default function NewsBlog({id}: {id: number}): JSX.Element {
    // const { htmlBody } = useNewsStore()
    const { data, isSuccess, isError, isPending } = useQuery({
        queryKey: ['news', `${id}`],
        queryFn: () => newsService.getById(id),
        staleTime: 60 * 5 * 1000
    })

    const dateString = (data && isSuccess) ? new Date(data.createdAt).toLocaleDateString() as string : 'Неизвестно'
    return (
        <>
            {isPending && <Loader />}
            {isSuccess && data && <div className={styles['news-blog']}>
                <div className={styles.header}>
                    <div className={styles['image-bg']}>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/${data.imagePath}`} className={styles.image} width="670" height="400" unoptimized alt={data.category} />
                    </div>
                    <h3>{data.title}</h3>
                </div>
                <div className={styles['blog-body']}>
                    <div className={styles['news-body']}>
                        <div className={styles['news-content']}>
                            <div className={styles['news-desc']} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.text) }}></div>
                        </div>
                    </div>
                    <div className={styles['news-body']}>
                        <div className={styles['news-description']}>
                            <ul className={styles['description-items']}>
                                <li>
                                    <DescriptionItem title="Published Date" description={dateString} />
                                </li>
                                <li>
                                    <DescriptionItem title="Category" description={data.category} />
                                </li>
                                <li>
                                    <DescriptionItem title="Author" description={data.author} />
                                </li>
                            </ul>
                        </div>
                        <NewsLink />
                    </div>
                </div>
            </div>}
        </>
    )
}