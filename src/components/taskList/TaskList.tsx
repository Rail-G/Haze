import React, { JSX } from "react";
import styles from './taskList.module.scss'
import TaskCard from "../taskCard/TaskCard";
import EmptyData from "../emptyData/EmptyData";
import Icon from "../icon/Icon";
import Loader from "../loader/Loader";
import { siteConfig } from "@/config/site.config";

interface ITaskList {
    children: React.ReactNode
}

export default function TaskList(): JSX.Element {
    return (
        <div className={styles['task-body']}>
            <h2 className={styles['task-title']}>Свободные миссии</h2>
            <ul className={styles['task-list']}>
                {siteConfig.taskItems.map((item) => {
                    return <li className={styles['task-item']}><TaskCard image={item.image} title={item.title} reward={item.reward} status={item.status} condition={item.condition} description={item.description} /></li>
                })}
            </ul>
            {/* <Loader /> */}
            {/* <EmptyData title="Все задачи выполнены" icon={<Icon iconName='taskDone' width='200px' height='200px'/>}/> */}
        </div>
    )
}