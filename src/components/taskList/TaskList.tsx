import React, { JSX } from "react";
import styles from './taskList.module.scss'
import TaskCard from "../taskCard/TaskCard";
import EmptyData from "../emptyData/EmptyData";
import Icon from "../icon/Icon";
import Loader from "../loader/Loader";

interface ITaskList {
    children: React.ReactNode
}

export default function TaskList(): JSX.Element {
    return (
        <div className={styles['task-body']}>
            <h2 className={styles['task-title']}>Свободные миссии</h2>
            {/* <ul className={styles['task-list']}>
                <li className={styles['task-item']}><TaskCard /></li>
                <li className={styles['task-item']}><TaskCard /></li>
                <li className={styles['task-item']}><TaskCard /></li>
                <li className={styles['task-item']}><TaskCard /></li>
                <li className={styles['task-item']}><TaskCard /></li>
            </ul> */}
            <Loader />
            {/* <EmptyData title="Все задачи выполнены" icon={<Icon iconName='taskDone' width='200px' height='200px'/>}/> */}
        </div>
    )
}