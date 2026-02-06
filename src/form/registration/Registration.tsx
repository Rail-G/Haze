import { JSX } from "react";
import styles from './registration.module.scss'
import Icon from "@/components/icon/Icon";

export default function RegistrationForm(): JSX.Element {
    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Создание аккаунта</h2>
                </div>
                <form noValidate>
                    <div className={styles['form-block']}>
                        <div className={`${styles['form-row']} ${styles['grid-row']}`}>
                            <div>
                                <label htmlFor="firstName" className={`${styles.label} ${styles.require}`}>Имя</label>
                                <input type="text" id="firstName" name="firstName" className={styles.input} placeholder="John" required />
                                <p className={`${styles.tip} ${styles.error}`}>Обязательное поле</p>
                            </div>
                            
                            <div>
                                <label htmlFor="lastName" className={`${styles.label} ${styles.require}`}>Фамилия</label>
                                <input type="text" id="lastName" name="lastName" className={styles.input} placeholder="Tree" required />
                                <p className={`${styles.tip} ${styles.error}`}>Обязательное поле</p>
                            </div>
                            
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="email" className={styles.label}>Почта</label>
                            <div className={styles['icon-block']}>
                                <div className={styles.icon}>
                                    <Icon iconName="mail" width='24px' height='24px'/>
                                </div>
                                <input type="email" id="email" name="email" className={styles.input} placeholder="example@example.com" />
                            </div>
                            <p className={`${styles.tip} ${styles.error}`}>Не валидный email</p>
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="password" className={`${styles.label} ${styles.require}`}>Пароль</label>
                            <div className={styles['icon-block']}>
                                <div className={styles.icon}>
                                    <Icon iconName="lock" width='24px' height='24px'/>
                                </div>
                                <input type="password" id="password" name="password" className={styles.input} placeholder="••••••••" required />
                            </div>
                            <p className={`${styles.tip} ${styles.error}`}>Должно быть не менее 8 символов с 1 заглавной, 1 числом и 1 специальным символом</p>
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="confirmPassword" className={`${styles.label} ${styles.require}`}>Подверждения пароля</label>
                            <div className={styles['icon-block']}>
                                <div className={styles.icon}>
                                    <Icon iconName="lock" width='24px' height='24px'/>
                                </div>
                                <input type="password" id="confirmPassword" name="confirmPassword" className={styles.input} placeholder="••••••••" required />
                            </div>
                            <p className={`${styles.tip} ${styles.error}`}>Пароли не совпадают</p>
                        </div>
                        <div className={`${styles['form-row']} ${styles['term-row']}`}>
                            <input type="checkbox" id="term" name="term" className={styles.term}/>
                            <label htmlFor="confirmPassword" className={styles.label}>
                                Я согласен с
                                <a href="https://gta-trinity.com/forum/topic/249532-Haze-Corporation/?do=findComment&comment=4407075" rel="noopener noreferrer" target="_blank" className={styles.link}>Устав корпорации</a>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className={styles.button}>Создать аккаунт</button>
                        </div>
                        <div className={styles['sign-in']}>
                            <p>
                                Уже имеется аккаунт?
                                <a href="#" className={styles.link}>Войти</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}