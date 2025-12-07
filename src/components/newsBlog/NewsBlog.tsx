import { JSX } from "react";
import styles from './newsBlog.module.scss'
import Image from "next/image";

export default function NewsBlog(): JSX.Element {
    return (
        <div className={styles['news-blog']}>
            <div className={styles.header}>
                <div className={styles['image-bg']}>
                    <Image src='/default.jpg' className={styles.image} width="670" height="400" alt='delegaciya' />
                </div>
                <h3>Проникновения в зал корпорации</h3>
            </div>
            <div className={styles['blog-body']}>
                <div className={styles['news-body']}>
                    <div className={styles['news-content']}>
                        <div>
                            <div>1. 15 марта на корпорацию "Haze" обрушалась большие проблемы в сфере экономики, а 21 марта на корпорацию была произведена хакерская атака. Узнать сторону нападавшего, к сожалению, не удалось. Вечером, того же дня, в лаборатории и в главном заседательском штабе была устроена пожар. Найти поджигателей не удалось, а вся конструкция была сожжена. С того дня корпорация "Haze" потеряла все связи общения и скрытно приостановила своё действия. 13 апреля связь была восстановлена, но вновь пробудить своё влияние в федерации не удалось. Но в скором надеемся, что мы вернем ту былое влияние в федерации.</div>
                            <div>&nbsp;</div>
                            <div>2. 16 марта была найдена мёртвое тело директора нашей сотруднической корпорации "Bioreslab", Васко Манригеза. Все данные о корпорации бесследно исчезли. 23 марта корпорация "Bioreslab" прекратила свое существования.</div>
                            <div>&nbsp;</div>
                            <div>3. В связи с переездом директора, компании "Полураспад", в Неваду, сотрудничество с его компанией была приостановлена.</div>
                            <div>&nbsp;</div>
                            <div>Мы заботимся о вашей здоровье!</div>
                        </div>
                    </div>
                </div>
                <div className={styles['news-body']}>
                    <div className={styles['news-description']}>
                        <ul className={styles['description-items']}>
                            <li>
                                <div className={styles['description-item']}>
                                    <span className={styles.title}>Published Date</span>
                                    <span className={styles.description}>00.00.0000</span>
                                </div>
                            </li>
                            <li>
                                <div className={styles['description-item']}>
                                    <span className={styles.title}>Category</span>
                                    <span className={styles.description}>Corporation</span>
                                </div>
                            </li>
                            <li>
                                <div className={styles['description-item']}>
                                    <span className={styles.title}>Author</span>
                                    <span className={styles.description}>Rail Diablo</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['news-links']}>
                        <span className={styles.title}>Table of Contents</span>
                        <ul className={styles['news-items']}>
                            <li>Test news link</li>
                            <li>Test news link</li>
                            <li>Test news link</li>
                            <li>Test news link</li>
                            <li>Test news link</li>
                            <li>Test news link</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}