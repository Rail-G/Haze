import { JSX } from "react";
import styles from './newsBlock.module.scss'
import Image from "next/image";
import Button from "../button/Button";
import InfoBlockItem from "./infoBlockItem/InfoBlockItem";
import { useNewsStore } from "@/store/NewsStore";

export default function NewsBlock(): JSX.Element {
    return (
        <div className={styles.block}>
            <div className={styles.news}>
                <Image src='/default.jpg' width={310} height={240} className={styles.image} alt="delegaciya" />
                <div className={styles.content}>
                    <h3 className={styles.title}>Global Climate Summit Addresses Urgent Climate Action</h3>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fugit ipsam officiis non cumque, reiciendis aperiam doloribus debitis quis hic deserunt, aspernatur quasi amet sunt est repellat illo provident vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates voluptas laborum culpa neque alias libero minima molestiae repellat sequi similique reprehenderit iste adipisci, aliquid quas officiis ducimus suscipit doloribus?</p>
                    <div className={styles['info-content']}>
                        <div className={styles['info-block']}>
                            <ul className={styles['info-list']}>
                                <li><InfoBlockItem title="Category" description="Test"/></li>
                                <li><InfoBlockItem title="Published" description="0.00.0000"/></li>
                                <li><InfoBlockItem title="Author" description="Administrator"/></li>
                            </ul>
                        </div>
                        <Button className={styles.button} title="Читать"/>
                    </div>
                </div>
            </div>
        </div>
    )
}