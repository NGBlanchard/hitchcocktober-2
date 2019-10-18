import React from 'react'

export default class MovieCard extends React.Component {
  render() {
    return(
      <div>
        {/* <h2>Title: {this.props.title}</h2> */}
        <img src={`https://image.tmdb.org/t/p/w200${this.props.movie.poster_path}`} alt="movie poster"/>
      </div>
    )
  }
}