"use client"

import React, { JSX, ReactNode } from "react";

interface IButton {
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    title?: string,
    children?: ReactNode,
    className: string,
    onClick?: () => void
}

export default function Button({type='button', title, children, className, onClick}: IButton): JSX.Element {
    return (
        <button type={type} className={className} onClick={onClick}>
            {title}
            {children}
        </button>
    )
}