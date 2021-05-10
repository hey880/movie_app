import Link from "next/link";
import styles from "./Korea.module.css";
import ScrollTop from "../../ScrollTop";

export default function Korea_quick_menu () {

    return (
        <div className={styles.korea_quick_menu} style={{position:"sticky", top: 50}}>
            
            <Link href="/movie/korea/Korea_movie">
              <li>영화이야기</li>
            </Link>
         
           
            <Link href="/movie/korea/Korea_actor">
              <li>배우이야기</li>
            </Link>
          
            
            <Link href="/movie/korea/Korea_news">
              <li>소식</li>
            </Link>
          
            
              <li>글쓰기</li>
          
           
              <li><ScrollTop/></li>
           
        </div>
    )
}