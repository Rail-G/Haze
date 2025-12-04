import React, { JSX } from "react";
import styles from './content.module.scss'

interface IContent {
    children: React.ReactNode
}

export default function Content({children}: IContent): JSX.Element {
    return (
        <main className={styles.content}>
            {children}
        </main>
    )
}