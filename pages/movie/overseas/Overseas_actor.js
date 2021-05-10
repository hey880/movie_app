import Quick_menu from "./Overseas_quick_menu";
import styles from "./Overseas.module.css";

export default function Overseas_actor() {
    return (
        <div className={styles.overseas_container}>
            <div className={styles.overseas_actor_banner}>
                <p>해외배우이야기</p>
            </div>
            <Quick_menu/>
        </div>
    )
}