import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  // let currentScrollValue = null;
  // document.addEventListener('scroll', function() {
  //   currentScrollValue  = document.documentElement.scrollTop;
  //    console.log('currentScrollValue is ' + currentScrollValue);
  //  })

  return (

    <div className={styles.nav_wrap}>
      <nav className={styles.nav}>
        <div className={styles.nav_firstLine}>
          <div className={styles.nav_title} style={{ fontSize: "25px" }}>
            <Link href="/">
              <a>
                <strong>Movie무지 좋다</strong>
              </a>
            </Link>
          </div>
          <div className={styles.nav_login}>
            <Link href="/">
              <a>로그인 </a>
            </Link>
            |
            <Link href="/">
              <a> 회원가입</a>
            </Link>
          </div>
        </div>

        <div>
          <ul className={styles.nav_secondLine}>
            <ul className={styles.nav_secondLine_menu}>

              <li>
                <strong>국내영화</strong>
              </li>
              <li>
                <strong>해외영화</strong>
              </li>
              <li>
                <strong>자유게시판</strong>
              </li>
              <li>
                <Link href="/menu/Suggest">
                  <strong>건의사항</strong>
                </Link>
              </li>
              <li>
                <Link href="/menu/Question">
                  <strong>문의사항</strong>
                </Link>
              </li>
            </ul>

            <ul className={styles.nav_secondLine_detail}>
              <li>
                <Link href="/movie/korea/Korea_movie">
                  <span>영화이야기</span>
                </Link>
                
                <Link href="/movie/korea/Korea_actor">
                  <span>배우이야기</span>
                </Link>
               
                <Link href="/movie/korea/Korea_news">
                  <span>소식</span>
                </Link>
              </li>
    
              <li>
                <Link href="/movie/overseas/Overseas_movie">
                  <span>영화이야기</span>
                </Link>
               
                <Link href="/movie/overseas/Overseas_actor">
                  <span>배우이야기</span>
                </Link>
                
                <Link href="/movie/overseas/Overseas_news">
                  <span>소식</span>
                </Link>
              </li>
              <li>
                <Link href="/menu/free/Free_daily">
                  <span>일 상</span>
                </Link>
                
                <Link href="/menu/free/Free_movie">
                  <span>영 화</span>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </div>
  );
}
