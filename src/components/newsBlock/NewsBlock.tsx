import { JSX } from "react";
import styles from './newsBlock.module.scss'
import Image from "next/image";
import Button from "../button/Button";
import InfoBlockItem from "./infoBlockItem/InfoBlockItem";

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
                            <InfoBlockItem title="Category" description="Test"/>
                            <InfoBlockItem title="Published" description="0.00.0000"/>
                            <InfoBlockItem title="Author" description="Administrator"/>
                        </div>
                        <Button className={styles.button} title="Читать"/>
                    </div>
                </div>
            </div>
        </div>
    )
}