import React from "react";
import Context from "../../Context";
import ApiService from "../../services/api-service";

import "./MovieCard.css";

export default class MovieCard extends React.Component {
  state = {
    dayNum: null
  };
  static contextType = Context;

  onChange = e => {
    this.setState({
      dayNum: e.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    const movie = this.context.list.filter(movie => {
      return movie.id === this.props.movie.id;
    });
    const day = {
      movie_id: movie[0].id,
      movie: movie[0].title,
      rating: 0,
      user_id: this.props.userId
    };
    const finPatch = {};
    finPatch[`oct${this.state.dayNum}`] = day;
    ApiService.patchDay(finPatch);
  };

  render() {
    const days = this.context.octDays;
    return (
      <section className="card-container">
        <div className="flipper">
          <span className="front">
            <img
              src={
                this.props.movie.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w200${this.props.movie.poster_path}`
                  : "https://dummyimage.com/200x300/000/fff.png&text=No+Poster"
              }
              alt="movie poster"
            />
          </span>
          <span className="back">
            <h3 className="title">{this.props.title}</h3>
            <select className="select" onChange={this.onChange}>
              <option value="">Add Movie to Date</option>
              {days.map((day, index) => (
                <option value={day} key={index}>
                  October {day}
                </option>
              ))}
            </select>
            <button className="card-submit" onClick={this.handleClick}>
              Update
            </button>
            <p className="overview'">{this.props.movie.overview}</p>
            {/* <h4>Released: {this.props.movie.release_date}</h4> */}
          </span>
        </div>
      </section>
    );
  }
}
