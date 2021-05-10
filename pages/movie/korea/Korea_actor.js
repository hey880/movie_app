import Quick_menu from "./Korea_quick_menu";
import style from "./Korea.module.css";

export default function Korea_actor () {
    return <div className={style.container}>
        <div className={style.korea_actor_banner}>
            <p>국내 배우 이야기</p>
        </div>
        <Quick_menu/>
    </div>
}