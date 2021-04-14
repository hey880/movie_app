import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_firstLine}>
        <div className={styles.menu}></div>
        <div className="index__title" style={{ fontSize: "25px" }}>
          <Link href="/">
            <a><strong>Movie무지 좋다</strong></a>
          </Link>
        </div>
        <div
          className="index__login"
          style={{ flex: 1, textAlign: "right", marginRight: 20 }}
        >
          <Link href="/">
            <a>로그인 </a>
          </Link>
          |
          <Link href="/">
            <a> 회원가입</a>
          </Link>
        </div>
      </div>
      <div className={styles.nav_secondLine}>
        <Link href="/movie/Korea">
          <a>
            <strong>국내영화</strong>
          </a>
        </Link>
        <Link href="/movie/Overseas">
          <a>
            <strong>해외영화</strong>
          </a>
        </Link>
        <Link href="/menu/Free">
          <a>
            <strong>자유게시판</strong>
          </a>
        </Link>
        <Link href="/menu/Suggest">
          <a>
            <strong>건의사항</strong>
          </a>
        </Link>
        <Link href="/menu/Question">
          <a>
            <strong>문의사항</strong>
          </a>
        </Link>
      </div>
    </nav>
  );
}
