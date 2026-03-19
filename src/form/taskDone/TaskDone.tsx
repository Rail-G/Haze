'use client'
import { JSX, useState } from "react";
import styles from '@/form/common/common.module.scss'
import Icon from "@/components/icon/Icon";
import Button from "@/components/button/Button";
import Condition from "../common/Condition";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuid } from 'uuid'
import { IConditionField } from "@/types/types";
import { taskDoneSchema } from "@/schemas/taskDone.schema";
import z from "zod";

export default function TaskDoneForm(): JSX.Element {
    const [filesCount, setFilesCount] = useState(0);
    const [radioValue, setRadioValue] = useState('Не присутствовал')
    const [conditionFields, setConditionFields] = useState<IConditionField[]>(Array(1).fill({ id: uuid(), value: '' }))
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        defaultValues: {
            intervention: '',
            staffs: [],
            images: []
        },
        resolver: zodResolver(taskDoneSchema)
    })
    const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        const radioTest = e.target.value
        setRadioValue(radioTest)
        setValue('intervention', radioTest)
        if (radioTest == 'Не присутствовал') {
            setValue('staffs', [])
        }
    }
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setFilesCount(files.length);
            setValue('images', [...files])
        }
        if (errors.images) {
            errors.images.message = ''
        }
    };
    const onSubmit: SubmitHandler<z.infer<typeof taskDoneSchema>> = (data) => {
        console.log(data)
    }
    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <div className={styles['close-btn']}>
                    <Icon iconName="minus" width='25px' height='25px' />
                </div>
                <div className={styles.header}>
                    <h2 className={styles.title}>Отчет о выполнении</h2>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); console.log(5); console.log(errors); handleSubmit(onSubmit)(e); }} noValidate>
                    <div>
                        <div className={styles['form-row']}>
                            <label className={styles.label}>Присутствие научного отряда</label>
                            <div className={styles['radio-block']}>
                                <label className={styles.radio}>
                                    <input {...register('intervention')} onChange={onChangeRadio} type="radio" id="intervention" name="intervention" className={`${styles.input} ${styles['radio-input']}`} placeholder="••••••••" value={'Присутствовал'} />
                                    Было
                                </label>
                                <label className={styles.radio}>
                                    <input {...register('intervention')} onChange={onChangeRadio} type="radio" id="intervention" name="intervention" className={`${styles.input} ${styles['radio-input']}`} placeholder="••••••••" value={'Не присутствовал'} defaultChecked />
                                    Не было
                                </label>
                            </div>
                        </div>
                        {radioValue == 'Присутствовал' && <Condition
                            title="Данные члена научного отряда"
                            placeholder="Имя и фамилия"
                            conditionFields={conditionFields}
                            setConditionFields={setConditionFields}
                            register={register}
                            registerTag="staffs"
                            setValue={setValue}
                            error={errors.staffs ? 'Пустые значения не принимаюстя' : undefined}
                        />}
                        <div className={styles['form-row']}>
                            <label className={styles.label}>Фото отчет</label>
                            <div>
                                <label htmlFor="images" className={styles['file-input']}>
                                    Выбрать фото
                                </label>
                                <input {...register('images')} onChange={onFileChange} type="file" name="images" id="images" accept="image/png, image/jpg, image/jpeg" multiple />
                            </div>
                            {filesCount != 0 && <span className={styles['inform-text']}>Загружено {filesCount} фото</span>}
                            {errors.images && <p className={`${styles.tip} ${styles.error}`}>{errors.images.message}</p>}
                        </div>
                        <div>
                            <Button type="submit" title="Отправить отчет" className={styles.button} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}