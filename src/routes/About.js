import React from "react";
import "./About.css";

function About(){
   //return <span>About this page: I built it because I love movies.</span>
   return (
    <div className="about__container">
      <span>
        2021/03/27 Update <br/><br/>
        API를 이용하여 영화 정보를 가져오는 사이트 입니다.
      </span>
    </div>
  );
}

export default About;