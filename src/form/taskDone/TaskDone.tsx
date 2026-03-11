import { JSX } from "react";
import styles from '@/form/common/common.module.scss'
import Icon from "@/components/icon/Icon";
import Button from "@/components/button/Button";
import Condition from "../common/Condition";

export default function TaskDoneForm(): JSX.Element {
    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <div className={styles['close-btn']}>
                    <Icon iconName="minus" width='25px' height='25px'/>
                </div>
                <div className={styles.header}>
                    <h2 className={styles.title}>Отчет о выполнении</h2>
                </div>
                <form noValidate>
                    <div>
                        <div className={styles['form-row']}>
                            <label className={styles.label}>Присутствие научного отряда</label>
                            <div className={styles['radio-block']}>
                                <label className={styles.radio}>
                                    <input type="radio" id="count" name="intervention" className={`${styles.input} ${styles['radio-input']}`} placeholder="••••••••" value={1} />
                                    Было
                                </label>
                                <label className={styles.radio}>
                                    <input type="radio" id="count" name="intervention" className={`${styles.input} ${styles['radio-input']}`} placeholder="••••••••" value={0} defaultChecked/>
                                    Не было
                                </label>
                            </div>
                        </div>
                        <Condition title="Данные члена научного отряда" placeholder="Имя и фамилия"/>
                        <div className={styles['form-row']}>
                            <label className={styles.label}>Фото отчет</label>
                            <div>
                                <label htmlFor="file" className={styles['file-input']}>
                                    Выбрать фото
                                </label>
                                <input type="file" name="file" id="file" accept="image/png, image/jpg, image/jpeg" multiple/>
                            </div>
                            <span className={styles['inform-text']}>Загружено 5 фото</span>
                        </div>
                        <div>
                            <Button type="submit" title="Отправить отчет" className={styles.button}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}