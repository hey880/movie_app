import Link from "next/link";
import styles from "./Free.module.css";
import ScrollTop from "../../ScrollTop";

export default function Free_quick_menu () {

    return (
        <div className={styles.free_quick_menu} style={{position:"sticky", top: 50}}>
            
            <Link href="/menu/free/Free_daily">
              <li>일 상</li>
            </Link>
         
           
            <Link href="/menu/free/Free_movie">
              <li>영 화</li>
            </Link>

            <li>글쓰기</li>
    
           
            <li><ScrollTop/></li>
           
        </div>
    )
}