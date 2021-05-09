import Quick_menu from "./Korea_quick_menu";
import style from "./Korea.module.css";

export default function Korea_actor () {
    return <div style={{height:"1500px", background:"white"}}>
        <div className={style.korea_actor_banner}>
        국내 배우 이야기
        </div>
        <Quick_menu/>
    </div>
}