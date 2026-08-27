'use client'
import { JSX, useContext } from "react";
import styles from './header.module.scss'
import Icon from "../icon/Icon";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { ThemeContext } from "../providers/themProvider/ThemeProvider";

export default function Header(): JSX.Element {
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <header>
            <div className={styles.rectangle}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <img src="./logo.png" alt="Haze Corporation Logo" />
                        <span>Haze</span>
                        <span>Corporation</span>
                    </div>
                    <div className={styles["contact-block"]}>
                        {siteConfig.contacts.map(({ icon, title, descripton }) => {
                            return <div key={icon} className={styles.contact}>
                                <span className={styles["icon-block"]}>
                                    <Icon iconName={icon} className={styles.icon} />
                                </span>
                                <div className={styles["contact-info"]}>
                                    <span>{title}</span>
                                    <span>{descripton}</span>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className={styles["nav-block"]}>
                        <nav className={styles.nav}>
                            <ul className={styles.list}>
                                {siteConfig.navItems.map(({href, title}) => {
                                    return <li key={title}>
                                        <Link href={href} className={styles.link}>{title}</Link>
                                        </li>
                                })}
                            </ul>
                        </nav>
                        <div className={styles['toggle-block']}>
                            <button className={styles.toggle} onClick={toggleTheme}>
                                <input type="checkbox" className={styles.checkbox}/>
                                <div className={styles.switch}></div>
                            </button>
                        </div>
                        {/* <div className={styles['auth-block']}>
                            <Link href={ROUTES.AUTHENTICATION} className={styles.auth}>Авторизация</Link>
                            <Link href={ROUTES.REGISTRATION} className={styles.auth}>Регистрация</Link>
                        </div> */}
                        <div className={styles['profile-block']}>
                            <div className={styles.profile}>
                                <Image src={'/default.jpg'} className={styles['profile-img']} width={250} height={250} alt="profile image"/>
                                <div className={styles['profile-info']}>
                                    <span>
                                        Rail Diablo
                                    </span>
                                </div>
                            </div>
                            <Link href={ROUTES.REGISTRATION} className={styles.auth}>Выйти</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}