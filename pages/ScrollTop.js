export default function ScrollTop() {
    return(
        <div onClick={()=>{
            document.documentElement.scrollTop = 0;
        }}>
            TOP ▲
        </div>
    )   
}