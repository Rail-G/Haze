'use client'

import { JSX, useState } from "react";
import styles from './imagePopup.module.scss'
import Image from "next/image";

// interface IPopup {
//     children: JSX.Element
// }

export default function ImagePopup({src}: {src: string}): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const openPopup = () => {
  setIsOpen(true);
  // небольшой таймаут нужен, чтобы CSS transition сработал
  setTimeout(() => setIsVisible(true), 0);
}

const closePopup = () => {
  setIsVisible(false);
  // после анимации скрываем вообще
  setTimeout(() => setIsOpen(false), 200);
}
    return (
        <>
            <div className={styles.default} onClick={openPopup}>
                <Image className={styles.img} src={src} width={200} height={200} alt="report img"/>
            </div>
            {isOpen && (
                <div className={`${styles.popup} ${isVisible ? styles.open : ''}`} onClick={closePopup}>
                    <div className={`${styles.popupContent} ${isVisible ? styles.open : ''}`}>
                        <Image className={styles.img} src={src} width={1000} height={500} alt="report img"/>
                    </div>
                </div>
            )}
        </>
    )
}