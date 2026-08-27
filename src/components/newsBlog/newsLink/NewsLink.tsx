import styles from './newsLink.module.scss'
export default function NewsLink() {
    return (
        <div className={styles['news-links']}>
            <span className={styles.title}>Список новостей</span>
            <ul className={styles['news-items']}>
                <li>Test news link</li>
                <li>Test news link</li>
                <li>Test news link</li>
                <li>Test news link</li>
                <li>Test news link</li>
                <li>Test news link</li>
            </ul>
        </div>
    )
}