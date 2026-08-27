'use client'
import { useContext } from "react"
import { ThemeContext } from "../providers/themProvider/ThemeProvider"
import styles from './themeSwitcher.module.scss'

export default function ThemeSwitcher({children}: {children: React.ReactNode}) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={styles.theme} data-theme={theme}>{children}</div>
    )
}