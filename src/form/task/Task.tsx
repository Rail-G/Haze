'use client'
import { JSX, useState } from "react";
import styles from '@/form/common/common.module.scss'
import Icon from "@/components/icon/Icon";
import Condition from "@/form/common/Condition";
import Button from "@/components/button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/schemas/task.schema";
import z from "zod";
import { v4 as uuid } from 'uuid'
import { IConditionField } from "@/types/types";

export default function TaskForm(): JSX.Element {
    const [conditionFields, setConditionFields] = useState<IConditionField[]>(Array(1).fill({ id: uuid(), value: '' }))
    const [filesCount, setFilesCount] = useState(0);
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            description: '',
            reward: '',
            conditions: [],
            image: undefined
        },
        resolver: zodResolver(taskSchema)
    })
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setFilesCount(files.length);
            setValue('image', files[0])
        }
        if (errors.image) {
            errors.image.message = ''
        }
    };

    const onSubmit: SubmitHandler<z.infer<typeof taskSchema>> = (data) => {
        console.log(data)
    }
    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <div className={styles['close-btn']}>
                    <Icon iconName="minus" width='25px' height='25px' />
                </div>
                <div className={styles.header}>
                    <h2 className={styles.title}>Создания задачи</h2>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); console.log(5); console.log(errors); handleSubmit(onSubmit)(e); }} noValidate>
                    <div >
                        <div className={styles['form-row']}>
                            <label htmlFor="title" className={styles.label}>Заголовок задачи</label>
                            <input {...register('title')} type="text" id="title" name="title" className={styles.input} placeholder="Почистить снег" required />
                            {errors.title && <p className={`${styles.tip} ${styles.error}`}>{errors.title.message}</p>}
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="description" className={styles.label}>Описания задачи</label>
                            <textarea {...register('description')} id="description" name="description" className={`${styles.input} ${styles.textarea}`} placeholder="Сегодня я решил почистить снего, потому что..." required />
                            {errors.description && <p className={`${styles.tip} ${styles.error}`}>{errors.description.message}</p>}
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="reward" className={styles.label}>Вознаграждение</label>
                            <input {...register('reward')} type="number" id="reward" name="reward" className={styles.input} placeholder="Введите число" required />
                            {errors.reward && <p className={`${styles.tip} ${styles.error}`}>{errors.reward.message}</p>}
                        </div>
                        <Condition<z.infer<typeof taskSchema>>
                            title="Дополнительные условия"
                            placeholder="Как усложним?"
                            conditionFields={conditionFields}
                            setConditionFields={setConditionFields}
                            register={register}
                            setValue={setValue}
                            registerTag="conditions"
                            error={errors.conditions ? 'Пустые значения не принимаюстя' : undefined}
                        />

                        <div className={styles['form-row']}>
                            <label className={styles.label}>Фото обложки</label>
                            <div>
                                <label htmlFor="image" className={styles['file-input']}>
                                    Выбрать фото
                                </label>
                                <input {...register('image')} onChange={onFileChange} type="file" name="image" id="image" accept="image/png, image/jpg, image/jpeg" />
                            </div>
                            {errors.image && <p className={`${styles.tip} ${styles.error}`}>{errors.image.message}</p>}
                            {filesCount != 0 && <span className={styles['inform-text']}>Загружено {filesCount} фото</span>}
                        </div>
                        <div>
                            <Button type="submit" title="Создать задачу" className={styles.button} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}