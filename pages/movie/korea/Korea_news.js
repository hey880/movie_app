import Quick_menu from "./Korea_quick_menu";
import style from "./Korea.module.css";

export default function Korea_news () {
    return <div style={{height:"1500px", background:"white"}}>
        <div className={style.korea_news_banner}>
            국내 영화 소식
        </div>
        <Quick_menu/>
    </div>
}