import Quick_menu from "./Overseas_quick_menu";
import styles from "./Overseas.module.css";

export default function Overseas_movie() {
    return (
        <div className={styles.overseas_container}>
            <div className={styles.overseas_movie_banner}>
                <p>해외영화이야기</p>
            </div>
            <Quick_menu/>
        </div>
    )
}