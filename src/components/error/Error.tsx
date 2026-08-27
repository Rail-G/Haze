import Button from "../button/Button";
import EmptyData from "../emptyData/EmptyData";
import Icon from "../icon/Icon";
import styles from './error.module.scss'

interface IError {
    onClick: () => void
}

export default function Error({onClick}: IError) {
    return (
        <div className={styles.block}>
            <EmptyData title="Произошла ошибка" icon={<Icon iconName="error" width={'100px'} height={'100px'} color={'red'} />} />
            <Button title="Повторить запрос" className={styles.button} onClick={onClick} />
        </div>
    )
}