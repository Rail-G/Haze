'use client'
import { JSX, useState } from "react";
import styles from './task.module.scss'
import Icon from "@/components/icon/Icon";
import TaskCondition from "./TaskCondition";

export default function TaskForm(): JSX.Element {
    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <div className={styles['close-btn']}></div>
                <div className={styles.header}>
                    <h2 className={styles.title}>Создания задачи</h2>
                </div>
                <form noValidate>
                    <div className={styles['form-block']}>
                        <div className={styles['form-row']}>
                            <label htmlFor="text" className={styles.label}>Заголовок задачи</label>
                            <input type="text" id="text" name="text" className={styles.input} placeholder="Почистить снег" required />
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="textArea" className={styles.label}>Описания задачи</label>
                            <textarea id="textArea" name="textArea" className={styles.input} placeholder="Сегодня я решил почистить снего, потому что..." required />
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="number" className={styles.label}>Вознаграждение</label>
                            <input type="number" id="number" name="number" className={styles.input} placeholder="Введите число" required />
                        </div>
                        <TaskCondition />
                        <div>
                            <button type="submit" className={styles.button}>Создать задачу</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}