import { JSX } from "react";
import styles from './emptyData.module.scss'
import Icon from "../icon/Icon";

interface IEmptyData {
    title: string,
    icon: JSX.Element
}

export default function EmptyData({title, icon}: IEmptyData): JSX.Element {
    return (
        <div className={styles.block}>
            {icon}
            <span>
                {title}
            </span>
        </div>
    )
}