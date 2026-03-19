import { JSX } from "react";
import styles from '@/form/common/common.module.scss'
import Icon from "@/components/icon/Icon";
import Button from "@/components/button/Button";

export default function LoginForm(): JSX.Element {
    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Подтверждения личности</h2>
                    {true && <p className={`${styles.tip} ${styles.error}`}>Тут будет ваша ошибка!</p>}
                </div>
                <form noValidate>
                    <div>
                        <div className={`${styles['form-row']} ${styles['grid-row']}`}>
                            <div>
                                <label htmlFor="firstName" className={styles.label}>Имя</label>
                                <input type="text" id="firstName" name="firstName" className={styles.input} placeholder="John" required />
                            </div>
                            <div>
                                <label htmlFor="lastName" className={styles.label}>Фамилия</label>
                                <input type="text" id="lastName" name="lastName" className={styles.input} placeholder="Tree" required />
                            </div>
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="password" className={styles.label}>Пароль</label>
                            <div className={styles['icon-block']}>
                                <div className={styles.icon}>
                                    <Icon iconName="lock" width='24px' height='24px' />
                                </div>
                                <input type="password" id="password" name="password" className={styles.input} placeholder="••••••••" required />
                            </div>
                        </div>
                        <div>
                            <Button type="submit" title="Создать аккаунт" className={styles.button} />
                        </div>
                        <div className={styles['sign-up']}>
                            <p>
                                Нету аккаунта?
                                <a href="#" className={styles.link}>Зарегистрироваться</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}