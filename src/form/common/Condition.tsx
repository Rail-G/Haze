'use client'
import { Dispatch, JSX, SetStateAction } from "react";
import styles from './common.module.scss'
import Icon from "@/components/icon/Icon";
import { v4 as uuid } from 'uuid'
import Button from "@/components/button/Button";
import { IConditionField } from "@/types/types";
import { FieldError, FieldErrors, FieldValues, Path, PathValue, UseFormRegister, UseFormSetValue } from "react-hook-form";

interface ICondition<T extends FieldValues> {
    title: string,
    placeholder: string,
    conditionFields: IConditionField[],
    setConditionFields: Dispatch<SetStateAction<IConditionField[]>>,
    register: UseFormRegister<T>,
    registerTag: Path<T>,
    setValue: UseFormSetValue<T>,
    error: string | undefined
}

export default function Condition<T extends FieldValues>({ title, placeholder, conditionFields, setConditionFields, registerTag, register, setValue, error }: ICondition<T>): JSX.Element {
    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const fields = [...conditionFields]
        fields[index].value = e.target.value
        setConditionFields(fields)
        setValue(registerTag, fields.map(elem => elem.value) as PathValue<T, Path<T>>);
    };

    const insertCondition = () => {
        if (conditionFields.length >= 3) return;
        const newFields = [...conditionFields, { id: uuid(), value: "" }];
        setConditionFields(newFields);
        setValue(registerTag, newFields.map(elem => elem.value) as PathValue<T, Path<T>>);
    };

    const handleDelete = (id: string) => {
        const newFields = conditionFields.filter((elem) => elem.id !== id);
        setConditionFields(newFields);
        setValue(registerTag, newFields.map(elem => elem.value) as PathValue<T, Path<T>>);
    };

    return (
        <div className={styles['form-row']}>
            <div className={styles['label-block']}>
                <label htmlFor="number" className={styles.label}>{title}</label>
                <Button type="button" className={styles['task-btn']} onClick={insertCondition}>
                    <Icon iconName="plus" width='15px' height='15px' />
                </Button>
            </div>
            <div className={styles['condition-block']}>
                {conditionFields.map((value, index) => (
                    <div key={value.id} className={styles['condition-row']}>
                        <input {...register(`${registerTag}.${index}` as Path<T>)} type="text" id={`condition-${index}`} name={`condition-${index}`} value={value.value} onChange={(e) => handleChange(index, e)} className={`${styles.input} ${styles['condition-input']}`} placeholder={placeholder} maxLength={10} required />
                        <Button type="button" onClick={() => handleDelete(value.id)} className={styles['task-btn']}>
                            <Icon iconName="minus" width='15px' height='15px' />
                        </Button>
                    </div>
                ))}
            </div>
            {error && <p className={`${styles.tip} ${styles.error}`}>{error}</p>}
        </div>
    )
}