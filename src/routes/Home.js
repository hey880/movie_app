import React from "react";
import axios from "axios";
import Movie from "../components/Movie"; //Movie.js를 임포트 
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
//isLoading이 딜레이 걸렸다가 false가 되면서 영화 정보들이 뜨는 형태
  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    this.setState({movies, isLoading:false});
  };

  componentDidMount(){
   
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    //위 변수에 movies를 넣지 않으면 아래애 movies.map을 적을 때
    //this.state.movies 이렇게 적어줘야 함.
    return (
      //javascript안의 class는 class component 클래스(여기서는 class App)를 의미.
     //따라서 javascript 안에는 class를 적을 때 className으로 적는다.
     //그냥 class라고 적으면 리액트는 class component와 혼동하여 Invalid DOM property `class`.에러 발생.

      <section className="container">
        {isLoading ?( 
        <div className="loader">
          <span className="loader_text">Loading....</span>
        </div> 
     ) : (
      <div className="movies">
        {
             movies.map(movie => (
              <Movie 
                    key={movie.id}
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                  ))
        }
      </div>
     )}
    </section>
    );
  }
}

export default Home;
