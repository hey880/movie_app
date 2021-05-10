import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {

var date = new Date(); 
var year = date.getFullYear(); 
var month = new String(date.getMonth()+1); 
var day = new String(date.getDate()-1); 


// 한자리수일 경우 0붙임
if(month.length == 1){ 
  month = "0" + month; 
} 
if(day.length == 1){ 
  day = "0" + day; 
} 

var fullDate = year+''+month+''+day;
console.log(fullDate)

const [isLoading, setIsLoading] = useState(false);

  const DailyApi =
    `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=07892c4e4e10841c040264635e96cfeb&targetDt=${fullDate}`;

  const WeeklyApi =
    `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=07892c4e4e10841c040264635e96cfeb&targetDt=${fullDate}`;

  const [dailyBoxOffice, setDailyBoxOffice] = useState([]);
  const [weeklyBoxOffice, setWeeklyBoxOffice] = useState([]);

  const getDailyBoxOffice = function () {
    axios.get(DailyApi)
    .then(setIsLoading(true))
    .then((res) => {
      setDailyBoxOffice(res.data.boxOfficeResult.dailyBoxOfficeList);
    })
    .then(setIsLoading(false))
  };

  const getWeeklyBoxOffice = function () {
    axios.get(WeeklyApi)
    .then(setIsLoading(true))
    .then((res) => {
      setIsLoading(true);
      setWeeklyBoxOffice(res.data.boxOfficeResult.weeklyBoxOfficeList);  
    })
    .then(setIsLoading(false))
  };

  useEffect(() => {
    getDailyBoxOffice();
    getWeeklyBoxOffice();
  }, []);


  return (
    <div>
      <Head>
        <title>무비무지 좋다!</title>
      </Head>
      {!isLoading ? <div style={{height:"1500px",background: 'white', textAlign:"center", lineHeight:"750px", fontSize:"30px", fontWeight:"bold"}}>Loading...</div> :
      <div className={styles.contents}>
        <div>
          <strong style={{ fontSize: "30px" }}>일간 박스오피스</strong>
          <div className={styles.boxOffice}> 
            {dailyBoxOffice.slice(0,5).map((val) => {
              return (
                <div style={{background:"white", width:"640px"}}>  
                  박스오피스 순위 {val.rank} 위
                <div>
                   {val.movieNm.length >=10 ? `<${val.movieNm.slice(0,10)}...>` :  `<${val.movieNm}>`}
                  개봉일 {val.openDt}
                  누적 관객수 {new Intl.NumberFormat().format(val.audiAcc)} 명 
                </div>
                </div> 
              );
            })}
          </div>
        </div>

        <div>
          <strong style={{ fontSize: "30px" }}>주말 박스오피스</strong>
          <div className={styles.boxOffice2}>
            {weeklyBoxOffice.slice(0,5).map((val) => {
              return (
                <div style={{background:"white", width:"620px"}}>
                  박스오피스 순위 {val.rank}위
                <div>
                   {val.movieNm.length >=10 ? `<${val.movieNm.slice(0,10)}...>` :  `<${val.movieNm}>`} 
                  개봉일 {val.openDt} 
                  누적 관객수 {new Intl.NumberFormat().format(val.audiAcc)}명
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>}
    </div>
  );
}
