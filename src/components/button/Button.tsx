"use client"

import { JSX } from "react";
import styles from './button.module.scss'

interface IButton {
    className: string,
    title: string,
    onClick?: () => void
}

export default function Button({title, className, onClick}: IButton): JSX.Element {
    const handleClick = onClick || (() => {})
    return (
        <button className={className} onClick={handleClick}>{title}</button>
    )
}