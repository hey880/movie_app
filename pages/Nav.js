import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  // let currentScrollValue = null;
  // document.addEventListener('scroll', function() {
  //   currentScrollValue  = document.documentElement.scrollTop;
  //    console.log('currentScrollValue is ' + currentScrollValue);
  //  })
  return (
    /*
    <div className={styles.detail_menu}>
        <ul>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
        </ul>

        <ul>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
        </ul>
     
        <ul>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
        </ul>
      
      
        <ul>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
        </ul>
    
      
        <ul>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
        </ul>
      </div> 
    */
   <div className={styles.nav_wrap}>
    <nav className={styles.nav}>

      <div className={styles.nav_firstLine}>
        <div className={styles.menu}></div>
        <div className="index__title" style={{ fontSize: "25px" }}>
          <Link href="/">
            <a>
              <strong>Movie무지 좋다</strong>
            </a>
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
        <ul>
            <a>
              <strong>국내영화</strong>
            </a>
            <Link href="/movie/korea/Korea_movie">
              <li>영화이야기</li>
            </Link>
            <Link href="/movie/korea/Korea_actor">
              <li>배우이야기</li>
            </Link>
            <Link href="/movie/korea/Korea_news">
              <li>소식</li>
            </Link>
        </ul>
        <ul>
        <a>
          <strong>해외영화</strong>
        </a>
          <Link href="/movie/overseas/Overseas_movie">
              <li>영화이야기</li>
            </Link>
            <Link href="/movie/overseas/Overseas_actor">
              <li>배우이야기</li>
            </Link>
            <Link href="/movie/overseas/Overseas_news">
              <li>소식</li>
            </Link>
        </ul>
        <ul>
          
            <a>
              <strong>자유게시판</strong>
            </a>
          
          <Link href="/menu/free/Free_daily"><li>일 상</li></Link>
          <Link href="/menu/free/Free_movie"><li>영 화</li></Link>
        </ul>
        <ul>
          <Link href="/menu/Suggest">
            <a>
              <strong>건의사항</strong>
            </a>
          </Link>
        </ul>
        <ul>
          <Link href="/menu/Question">
            <a>
              <strong>문의사항</strong>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
    </div>
  );
}
