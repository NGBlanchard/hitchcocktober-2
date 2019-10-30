import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
import Nav from '../Nav/Nav'
import Context from '../../Context'
import TokenService from '../../services/token-service'

import './List.css'

export default class List extends React.Component {
  state = {
    obj: [],
    user: null,
  }
  static contextType = Context

  renderlist() {
    const stringId = TokenService.getUserId();
    const userId = parseInt(stringId, 10);
    return (
      this.context.list.map(movie =>
      <MovieCard
        key={movie.id}
        title={movie.original_title}
        movie={movie}
        userId={userId}
      />
        )
    )
  }

  render() {
    return (
      <>
        <Nav />
        <header className="list-header">
          Hitchcock's Movies
        </header>
        <div className="movie-list">
          {this.renderlist()}
        </div>
      </>
      )
    
  }

}