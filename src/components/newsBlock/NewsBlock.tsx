import { JSX } from "react";
import styles from './newsBlock.module.scss'
import Image from "next/image";
import Button from "../button/Button";

export default function NewsBlock(): JSX.Element {
    return (
        <div className={styles.block}>
            <div className={styles.news}>
                <Image src='/default.jpg' width={310} height={240} className={styles.image} alt="delegaciya" />
                <div className={styles.content}>
                    <h3 className={styles.title}>Global Climate Summit Addresses Urgent Climate Action</h3>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias reprehenderit quos quis perferendis, vero dignissimos ullam quo amet iusto accusantium necessitatibus officia cum numquam temporibus maxime laborum, consectetur vitae.</p>
                    <div className={styles['info-content']}>
                        <div className={styles['info-block']}>
                            <div className={styles['info-item']}>
                                <span className={styles['info-title']}>Category</span>
                                <span className={styles['info-description']}>Test</span>
                            </div>
                            <div className={styles['info-item']}>
                                <span className={styles['info-title']}>Published</span>
                                <span className={styles['info-description']}>0.00.0000</span>
                            </div>
                            <div className={styles['info-item']}>
                                <span className={styles['info-title']}>Author</span>
                                <span className={styles['info-description']}>Administrator</span>
                            </div>
                        </div>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}