"use client"

import React, { JSX, ReactNode } from "react";

interface IButton {
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    title?: string,
    children?: ReactNode,
    className: string,
    disabled?: boolean,
    onClick?: () => void
}

export default function Button({type='button', title, children, className, disabled=false, onClick}: IButton): JSX.Element {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>
            {title}
            {children}
        </button>
    )
}