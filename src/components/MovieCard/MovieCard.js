import React from 'react'
import Context from '../../Context'

import './MovieCard.css'

export default class MovieCard extends React.Component {
  
  static contextType = Context



  handleChange = event => {
      event.preventDefault();
      console.log(event.target.value)
      console.log(this.props.movie.id)

    
  };

  render() {
    const days = this.context.octDays
    return(
      <section className="card-container" >
        <div className="flipper">
        <span className="front">
          <img src={this.props.movie.poster_path !== null ? `https://image.tmdb.org/t/p/w200${this.props.movie.poster_path}` : 'https://dummyimage.com/200x300/000/fff.png&text=No+Poster'} alt="movie poster"/>
        </span>
        <span className="back">
          <h3 className="title">{this.props.title}</h3>
          <select className="select" onChange={this.handleChange}>
          <option value="">Add Movie to Date</option>
              {days.map((day, index) => (
                  <option value={day} key={index}>October {day}</option>
              ))}
          </select>
          <p className="overview'">{this.props.movie.overview}</p>
          {/* <h4>Released: {this.props.movie.release_date}</h4> */}
        </span>
        </div>
      </section>
    )
  }
}