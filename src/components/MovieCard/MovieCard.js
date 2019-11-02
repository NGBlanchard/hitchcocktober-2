import React from "react";
import Context from "../../Context";
import ApiService from "../../services/api-service";
import { Redirect } from "react-router-dom";

import "./MovieCard.css";

export default class MovieCard extends React.Component {
  state = {
    update: "Update",
    bgColor: "beige",
    toCalendar: false,
    dayNum: "null",
    day: false,
    error: "none"
  };
  static contextType = Context;

  onChange = e => {
    this.setState({
      dayNum: e.target.value,
      
    });
  };

  validateDay = event => {
    if (this.state.dayNum === "null") {
      this.setState({
        error: "block",
        update: "Update",
        bgColor: "beige",
      })
    } else {
      this.handleClick(event)
    }
  }

  handleClick = event => {
    event.preventDefault(); 
    const movie = this.context.list.filter(movie => {
      return movie.id === this.props.movie.id;
    });
    const day = {
      movie_id: movie[0].id,
      movie: movie[0].title,
      rating: 0,
      poster_path: movie[0].poster_path,
      user_id: this.props.userId
    };
    const finPatch = {};
    finPatch[`oct${this.state.dayNum}`] = day;
    const movieDay = [`oct${this.state.dayNum}`];
    ApiService.patchDay(finPatch);
    this.context.updateBigObj(finPatch, movieDay, day);
    this.setState({
      update: "Added!",
      bgColor: "#32CD32",
      error: "none"
    });
  };

  render() {
    if (this.state.toCalendar === true) {
      return <Redirect to="/calendar" />;
    }
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
              <option value="null">Add Movie to Date</option>
              {days.map((day, index) => (
                <option value={day} key={index}>
                  October {day}
                </option>
              ))}
            </select>
            <p className="Required" style={{ display: this.state.error}}>
              Please select a day to add this movie to
            </p>
            <button
              className="card-submit"
              onClick={this.validateDay}
              style={{ backgroundColor: this.state.bgColor }}
            >
              <p className="update">{this.state.update}</p>
            </button>
            <p className="overview'">{this.props.movie.overview}</p>
          </span>
        </div>
      </section>
    );
  }
}
