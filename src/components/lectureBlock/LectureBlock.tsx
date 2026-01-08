import { JSX } from 'react'
import EmptyData from '../emptyData/EmptyData'
import Icon from '../icon/Icon'
import styles from './lectureBlock.module.scss'
import ReportItem from '../reportItem/ReportItem'
import Popup from '../popup/Popup'

export default function LectureBlock(): JSX.Element {
    return (
        <div className={styles.block}>
            <div className={styles['info-block']}>
                <h2 className={styles.title}>Мы вновь открылись</h2>
                <p>Дорогие граждане всех федераций! Мы рады сообщить об открытии Института Научных Исследований.</p>
                <p>Это учреждение станет центральной площадкой для учебы, обмена знаниями и научного сотрудничества. Мы приглашаем амбициозных студентов и исследователей присоединиться к нам, чтобы вместе развивать инновации и узнавать новое.</p>
                <p>Вы узнаете, что знания — это ключ к миру, и в наших стенах вы сможете развить свои навыки на высшем уровне. Мы подготовили уникальные программы, которые помогут студентам освоить знания, необходимые для строительства будущего.</p>
                <p>Приглашаем вас стать частью нашей учебной семьи!</p>
                <p>Вы можете найти нас по адресу: /gps s 48</p>
            </div>
            <button className={styles.button}>Отчет об обучении</button>
            <hr />
            <div className={styles['report-block']}>
                {/* <EmptyData title='Отчеты об обучении отсутвуют' icon={<Icon iconName='taskDone' width='120px' height='120px'/>}/> */}
                <ul className={styles.list}>
                    <li><ReportItem /></li>
                    <li><ReportItem /></li>
                    <li><ReportItem /></li>
                    <li><ReportItem /></li>
                </ul>
            </div>
        </div>
    )
}