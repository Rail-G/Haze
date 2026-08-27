'use client'
import { JSX } from "react";
import styles from './newsLast.module.scss'
import Image from "next/image";
import Button from "../button/Button";
import InfoBlockItem from "./infoBlockItem/InfoBlockItem";
import { useQuery } from "@tanstack/react-query";
import { newsService } from "@/services/news.service";
import { INewsItem } from "@/types/types";
import Loader from "../loader/Loader";
import Link from "next/link";
import EmptyData from "../emptyData/EmptyData";
import Icon from "../icon/Icon";
import Error from "../error/Error";

export default function NewsLast(): JSX.Element {
    const { data, isError, isPending, isSuccess, refetch } = useQuery({
        queryKey: ['lastNews'],
        queryFn: () => newsService.getLast(),
        staleTime: 60 * 5 * 1000,
    })
    const dateString = (data && isSuccess) ? new Date(data.createdAt).toLocaleDateString() as string : 'Неизвестно'
    const handleError = () => refetch()
    return (
        <>
            {isError && <Error onClick={handleError} />}
            {isPending && <Loader />}
            {isSuccess && data && <div className={styles.block}>
                <div className={styles.news}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/${data.imagePath}`} width={310} height={240} className={styles.image} unoptimized alt={data.category} />
                    <div className={styles.content}>
                        <h3 className={styles.title}>{data.title}</h3>
                        <p className={styles.paragraph}>{data.text}</p>
                        <div className={styles['info-content']}>
                            <div className={styles['info-block']}>
                                <ul className={styles['info-list']}>
                                    <li><InfoBlockItem title="Category" description={data.category} /></li>
                                    <li><InfoBlockItem title="Published" description={dateString} /></li>
                                    <li><InfoBlockItem title="Author" description="Administrator" /></li>
                                </ul>
                            </div>
                            {/* <Button className={styles.button} title="Читать" /> */}
                            <Link href={`/news/${data.id}`} className={styles.button}>Читать</Link>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}