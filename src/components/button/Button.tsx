"use client"

import React, { JSX, ReactNode } from "react";

interface IButton {
    type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    title?: string,
    children?: ReactNode,
    className: string,
    onClick?: () => void
}

export default function Button({type, title, children, className, onClick}: IButton): JSX.Element {
    const handleClick = onClick || (() => {})
    return (
        <button type={type} className={className} onClick={handleClick}>
            {title}
            {children}
        </button>
    )
}