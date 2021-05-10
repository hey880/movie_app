import styles from './Free.module.css';
import Free_quick_menu from './Free_quick_menu';

export default function Free_movie() {
    return (
        <div className={styles.free_container}>
            <div className={styles.free_movie_banner}>
                <p>영화 잡담</p>
            </div>
            <Free_quick_menu/>
        </div>
        )
}