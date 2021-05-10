import styles from './Free.module.css';
import Free_quick_menu from './Free_quick_menu';

export default function Free_daily() {
    return (
        <div className={styles.free_container}>
            <div className={styles.free_daily_banner}>
                <p>일상 잡담</p>
            </div>
            <Free_quick_menu/>
        </div>
        )
}