import { JSX } from "react";
import styles from './button.module.scss'

export default function Button(): JSX.Element {
    return (
        <button className={styles.button}>Читать</button>
    )
}