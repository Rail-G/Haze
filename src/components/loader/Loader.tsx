import { JSX } from "react";
import styles from './loader.module.scss'

export default function Loader(): JSX.Element {
    return (
        <div className={styles.block}>
            <div className={`${styles.circle} ${styles.duration}`}></div>
            <div className={`${styles.circle} ${styles.duration}`}></div>
            <div className={`${styles.circle} ${styles.duration}`}></div>
            <div className={`${styles.circle} ${styles.duration}`}></div>
            <div className={`${styles.circle} ${styles.duration}`}></div>
        </div>
    )
}