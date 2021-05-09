import Quick_menu from "./Korea_quick_menu";
import style from "./Korea.module.css";

export default function Korea_movie () {
    return <div style={{height:"1500px", background:"white"}}>
        <div className={style.korea_movie_banner}>
        국내 영화 이야기
        </div>
        <Quick_menu/>
    </div>
}