'use client'

import { JSX, useState } from "react";
import styles from './popup.module.scss'

interface IPopup {
    children: JSX.Element
}

export default function Popup({children}: IPopup): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };
    return (
        <>
            <div className={styles.default} onClick={togglePopup}>
                {children}
            </div>
            {isOpen && (
                <div className={styles.popup} onClick={togglePopup}>
                    <div className={styles.popupContent}>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}