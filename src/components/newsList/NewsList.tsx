'use client'
import { JSX, useState } from "react";
import styles from './newsList.module.scss'
import NewsItem from "../newsItem/NewsItem";
import { siteConfig } from "@/config/site.config";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { newsService } from "@/services/news.service";
import Loader from "../loader/Loader";
import { randomUUID } from "crypto";
import EmptyData from "../emptyData/EmptyData";
import Icon from "../icon/Icon";
import Error from "../error/Error";
import { INewsItem } from "@/types/types";
import Button from "../button/Button";

export default function NewsList(): JSX.Element {
    const ITEMS_COUNT = 4
    const [listPage, setListPage] = useState(0)
    const { data, isError, isPending, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfiniteQuery<INewsItem[], Error>({
        queryKey: ['infinityNewsList'],
        queryFn: ({ pageParam = 0 }) => newsService.getPartial(pageParam as number),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.length != 0 && lastPage.length == ITEMS_COUNT) {
                return lastPage.at(-1)?.id
            }
            return undefined
        },
        staleTime: 60 * 5 * 1000,
    })

    const handleNext = () => {
        fetchNextPage().then(() => setListPage(listPage + 1))
    }

    const handleError = () => refetch()

    return (
        <>
            {isError && <Error onClick={handleError} />}
            {(isPending || isFetchingNextPage) && <Loader />}
            {(isSuccess && data && !isFetchingNextPage) && <div className={styles['list']}>
                {listPage > 0 && <Button type="button" onClick={() => setListPage(listPage - 1)} className={styles.prev} title={'<'}/>}
                <ul className={styles.items}>
                    {data
                        .pages[listPage]
                        .map(({ imagePath, title, ...information }, index) => {
                            return <li key={index}><NewsItem imagePath={imagePath} title={title} category={information.category} /></li>
                        })}
                </ul>
                {(hasNextPage || data.pages.at(listPage)?.length == 4) && (
                <Button type="button" onClick={handleNext} className={styles.next} title={'>'}/>
        )}
            </div>}
        </>
    )
}