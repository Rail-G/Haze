'use client'
import { JSX, useState } from "react";
import styles from './task.module.scss'
import Icon from "@/components/icon/Icon";
import {v4 as uuid} from 'uuid'
export default function TaskCondition(): JSX.Element {
    const [conditionFields, setConditionFields] = useState(Array(1).fill({ id: uuid(), value: '' }))

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const fields = [...conditionFields]
        fields[index].value = e.target.value
        setConditionFields(fields)
    };

    const insertCondition = () => {
        if (conditionFields.length >= 3) return
        setConditionFields([...conditionFields, { id: uuid(), value: '' }])
    }

    const handleDelete = (id: number) => {
        setConditionFields(conditionFields.filter(elem => elem.id != id))
    }

    return (
        <div className={styles['form-row']}>
            <div className={styles['label-block']}>
                <label htmlFor="number" className={styles.label}>Дополнительные условия</label>
                <button type="button" className={styles['task-btn']} onClick={insertCondition}>
                    <Icon iconName="plus" width='15px' height='15px' />
                </button>
            </div>
            <div className={styles['condition-block']}>
                {conditionFields.map((value, index) => (
                    <div key={value.id} className={styles['condition-row']}>
                        <input type="text" id="number" name="number" value={conditionFields[index].value} onChange={(e) => handleChange(index, e)} className={`${styles.input} ${styles['condition-input']}`} placeholder="Как усложним?" required />
                        <button type="button" onClick={() => handleDelete(value.id)} className={styles['task-btn']}>
                            <Icon iconName="minus" width='15px' height='15px' />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}