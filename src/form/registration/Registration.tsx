'use client'
import { JSX } from "react";
import styles from '@/form/common/common.module.scss'
import Icon from "@/components/icon/Icon";
import Button from "@/components/button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/registration.schema";
import z from "zod";

export default function RegistrationForm(): JSX.Element {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false
        },
        resolver: zodResolver(registerSchema)
    })
    const onSubmit: SubmitHandler<z.infer<typeof registerSchema>> = (data) => {
            console.log(data)
        }
    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Создание аккаунта</h2>
                </div>
                <form onSubmit={(e) => {e.preventDefault(); console.log(5); console.log(errors); handleSubmit(onSubmit)(e);}} noValidate>
                    <div>
                        <div className={`${styles['form-row']} ${styles['grid-row']}`}>
                            <div>
                                <label htmlFor="firstName" className={`${styles.label} ${styles.require}`}>Имя</label>
                                <input {...register('firstName')} type="text" id="firstName" name="firstName" className={styles.input} placeholder="John" required />
                                {errors.firstName && <p className={`${styles.tip} ${styles.error}`}>{errors.firstName.message}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="lastName" className={`${styles.label} ${styles.require}`}>Фамилия</label>
                                <input {...register('lastName')} type="text" id="lastName" name="lastName" className={styles.input} placeholder="Tree" required />
                                {errors.lastName && <p className={`${styles.tip} ${styles.error}`}>{errors.lastName.message}</p>}
                            </div>
                            
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="email" className={styles.label}>Почта</label>
                            <div className={styles['icon-block']}>
                                <div className={styles.icon}>
                                    <Icon iconName="mail" width='24px' height='24px'/>
                                </div>
                                <input {...register('email')} type="email" id="email" name="email" className={styles.input} placeholder="example@example.com" />
                            </div>
                            {false && <p className={`${styles.tip} ${styles.error}`}></p>}
                            {errors.email && <p className={`${styles.tip} ${styles.error}`}>{errors.email.message}</p>}
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="password" className={`${styles.label} ${styles.require}`}>Пароль</label>
                            <div className={styles['icon-block']}>
                                <div className={styles.icon}>
                                    <Icon iconName="lock" width='24px' height='24px'/>
                                </div>
                                <input {...register('password')} type="password" id="password" name="password" className={styles.input} placeholder="••••••••" required />
                            </div>
                            {/* <p className={`${styles.tip} ${styles.error}`}>Должно быть не менее 8 символов с 1 заглавной, 1 числом и 1 специальным символом</p> */}
                            {errors.password && <p className={`${styles.tip} ${styles.error}`}>{errors.password.message}</p>}
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="confirmPassword" className={`${styles.label} ${styles.require}`}>Подверждения пароля</label>
                            <div className={styles['icon-block']}>
                                <div className={styles.icon}>
                                    <Icon iconName="lock" width='24px' height='24px'/>
                                </div>
                                <input {...register('confirmPassword')} type="password" id="confirmPassword" name="confirmPassword" className={styles.input} placeholder="••••••••" required />
                            </div>
                            {errors.confirmPassword && <p className={`${styles.tip} ${styles.error}`}>{errors.confirmPassword.message}</p>}
                        </div>
                        <div className={styles['form-row']}>
                            <div className={styles['term-row']}>
                                <input {...register('terms')} type="checkbox" id="terms" name="terms" className={styles.term}/>
                            <label className={styles.label}>
                                Я согласен с
                                <a href="https://gta-trinity.com/forum/topic/249532-Haze-Corporation/?do=findComment&comment=4407075" rel="noopener noreferrer" target="_blank" className={styles.link}>Устав корпорации</a>
                            </label>
                            </div>
                            {errors.terms && <p className={`${styles.tip} ${styles.error}`}>{errors.terms.message}</p>}
                        </div>
                        <div>
                            <Button type="submit" title="Создать аккаунт" className={styles.button}/>
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