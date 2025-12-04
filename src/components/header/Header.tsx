import { JSX } from "react";
import styles from './header.module.scss'
import Icon from "../icon/Icon";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function Header(): JSX.Element {
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
                                        <Link href={href}>{title}</Link>
                                        </li>
                                })}
                            </ul>
                        </nav>
                        <div className={styles['auth-block']}>
                            <Link href={ROUTES.AUTHENTICATION} className={styles.auth}>Авторизация</Link>
                            <Link href={ROUTES.REGISTRATION} className={styles.auth}>Регистрация</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}