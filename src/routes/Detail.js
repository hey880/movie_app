import React from "react";
import './Detail.css';

class Detail extends React.Component{
    componentDidMount(){//render가 실행된 다음에 이게 실행된다.
        const {location,history} = this.props;
        //위의 location, history 같은 props를 사용할 수 있는 건 Detail이 
        //Route안에 있기 때문.
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        //이 이후에는 더이상 location이 존재하지 않으므로 주소창에서
        //추가로 엔터를 치면 위에거가 실행 되기 전에 실행되는 render에서
        //location이 사라진 거기 때문에 에러 발생.
        //if로 걸러주자.
        if(location.state){//location.state가 존재하면
            return (<div className="detail">
                <span className="poster">
                <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                </span>
                <br/>
                <span className="title">
                <h2>{location.state.title}</h2>
                </span>
                <br/>
                <span className="summary">
                {location.state.summary}
                </span>
                </div>
                )
        } else {
            return null; //없으면 null을 반환하고 위의 didMount로 이동
        }
    }
}

export default Detail;