import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
  const DailyApi =
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=07892c4e4e10841c040264635e96cfeb&targetDt=20210505";

  const WeeklyApi =
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=07892c4e4e10841c040264635e96cfeb&targetDt=20210501";

  const [dailyBoxOffice, setDailyBoxOffice] = useState([]);
  const [weeklyBoxOffice, setWeeklyBoxOffice] = useState([]);

  const getDailyBoxOffice = function () {
    axios.get(DailyApi).then((res) => {
      setDailyBoxOffice(res.data.boxOfficeResult.dailyBoxOfficeList);
    });
  };

  const getWeeklyBoxOffice = function () {
    axios.get(WeeklyApi).then((res) => {
      setWeeklyBoxOffice(res.data.boxOfficeResult.weeklyBoxOfficeList);
    });
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
      <div className={styles.contents} style={{height:"1500px", background:"white"}}>
        <div>
          <strong style={{ fontSize: "40px" }}>일간 박스오피스</strong>
          <div className={styles.boxOffice}> 
            {dailyBoxOffice.map((val) => {
              return (
                <span>
                   {val.movieNm.length >=10 ? `<${val.movieNm.slice(0,10)}...>` :  `<${val.movieNm}>`} <br />
                  개봉일 {val.openDt} <br />
                  박스오피스 순위 {val.rank} 위 <br/>
                  누적 관객수 {new Intl.NumberFormat().format(val.audiAcc)} 명 <br/>
                </span>
              );
            })}
          </div>
        </div>

        <div>
          <strong style={{ fontSize: "40px" }}>주말 박스오피스</strong>
          <div className={styles.boxOffice2}>
            {weeklyBoxOffice.map((val) => {
              return (
                <span>
                   {val.movieNm.length >=10 ? `<${val.movieNm.slice(0,10)}...>` :  `<${val.movieNm}>`} <br />
                  개봉일 {val.openDt} <br />
                  박스오피스 순위 {val.rank}위 <br/>
                  누적 관객수 {new Intl.NumberFormat().format(val.audiAcc)}명<br/>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
