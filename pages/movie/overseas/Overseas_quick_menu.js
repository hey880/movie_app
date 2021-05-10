import Link from "next/link";
import styles from "./Overseas.module.css";
import ScrollTop from "../../ScrollTop";

export default function Overseas_quick_menu () {

    return (
        <div className={styles.overseas_quick_menu} style={{position:"sticky", top: 50}}>

            <Link href="/movie/overseas/Overseas_movie">
              <li>영화이야기</li>
            </Link>

            <Link href="/movie/overseas/Overseas_actor">
              <li>배우이야기</li>
            </Link>

            <Link href="/movie/overseas/Overseas_news">
              <li>소식</li>
            </Link>

              <li>글쓰기</li>

              <li><ScrollTop/></li>
        </div>
    )
}