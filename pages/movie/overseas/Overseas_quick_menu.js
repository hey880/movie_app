import Link from "next/link";
import ScrollTop from "../../ScrollTop";

export default function Overseas_quick_menu () {

    return (
        <div style={{position:"sticky", marginTop:"50px", top: 50 ,width: "100px", height: "250px", background:"black", float:"right", borderRadius:"10px", color:"white", listStyle:"none", textAlign:"center"}}>
            <div style={{lineHeight:"50px",height:"50px", cursor:"pointer"}}>
            <Link href="/movie/overseas/Overseas_movie">
              <li>영화이야기</li>
            </Link>
            </div>
            <div style={{lineHeight:"50px",height:"50px", cursor:"pointer"}}>
            <Link href="/movie/overseas/Overseas_actor">
              <li>배우이야기</li>
            </Link>
            </div>
            <div style={{lineHeight:"50px",height:"50px", cursor:"pointer"}}>
            <Link href="/movie/overseas/Overseas_news">
              <li>소식</li>
            </Link>
            </div>
            <div style={{lineHeight:"50px",height:"50px", cursor:"pointer"}}>
                글쓰기
            </div>
            <div style={{lineHeight:"50px",height:"50px", cursor:"pointer"}}>
                <ScrollTop/>
            </div>
        </div>
    )
}