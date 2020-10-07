import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Nav from "../Nav/Nav";
import Context from "../../Context";
import TokenService from "../../services/token-service";
import movie from "../../images/movie-head.png";

import "./List.css";

export default class List extends React.Component {
  static contextType = Context;

  shuffleList = (movies) => {
    if (movies === null) {return}
    let i = movies.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = movies[i];
      movies[i] = movies[j];
      movies[j] = temp;
    }
    return movies;
  }
  renderlist() {
    const shuffledMovies = this.shuffleList(this.context.list)
    const stringId = TokenService.getUserId();
    const userId = parseInt(stringId, 10);
    return shuffledMovies.map(movie => (
      <MovieCard
        key={movie.id}
        title={movie.original_title}
        movie={movie}
        userId={userId}
      />
    ));
  }

  render() {
    return (
      <>
        <Nav />
        <header className="list-header">
          <img src={movie} alt="movie" className="list-header" />
        </header>
        <div className="movie-list">{this.renderlist()}</div>
      </>
    );
  }
}
