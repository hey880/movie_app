import Quick_menu from "./Korea_quick_menu";
import style from "./Korea.module.css";

export default function Korea_movie () {
    return <div className={style.container}>
        <div className={style.korea_movie_banner}>
            <p>국내 영화 이야기</p>
        </div>
        <Quick_menu/>
    </div>
}