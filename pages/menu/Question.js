import styles from './Question.module.css';

export default function Question() {
    return (
        <div className={styles.question_container}>
            <div className={styles.question_banner}>
                <p>질 문</p>
            </div>
        </div>
        )
}