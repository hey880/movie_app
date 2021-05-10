import Quick_menu from "./Korea_quick_menu";
import style from "./Korea.module.css";

export default function Korea_news () {
    return <div className={style.container}>
        <div className={style.korea_news_banner}>
            <p>국내 영화 소식</p>
        </div>
        <Quick_menu/>
    </div>
}