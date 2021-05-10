import Quick_menu from "./Overseas_quick_menu";
import styles from "./Overseas.module.css";

export default function Overseas_news() {
    return (
        <div className={styles.overseas_container}>
            <div className={styles.overseas_news_banner}>
                <p>해외영화 소식</p>
            </div>
            <Quick_menu/>
        </div>
    )
}