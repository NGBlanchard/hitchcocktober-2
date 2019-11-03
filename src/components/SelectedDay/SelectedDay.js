import React from "react";
import Context from "../../Context";
import { NavLink } from "react-router-dom";

import "./SelectedDay.css";
// import { getDay } from "date-fns/esm";

export default class SelectedDay extends React.Component {
  state = {
    today: this.props.today
  };

  static contextType = Context;

  render() {
    return (
      <>
        <h2 className="date-banner">October {this.props.day}</h2>
        <section className="dinner-and-movie">
          <h4 className="movie-details">
            {this.props.poster
              ? `Tonight, you're watching ${this.props.dayData.title}`
              : ``}
          </h4>
          <section className="tonight-movie-card">
            <NavLink to={`/list`} className="add-move">
              <img
                className="selected-movie-image"
                src={
                  this.props.poster
                    ? `https://image.tmdb.org/t/p/w200${this.props.poster}`
                    : "https://dummyimage.com/200x300/000/fff.png&text=Add+Movie"
                }
                alt="movie poster"
              />
            </NavLink>
            {this.props.poster ? (
              <span>
                <p className="overview">{this.props.dayData.overview}</p>
                <p className="stats">
                  Average Rating: {this.props.dayData.vote_average}/10
                </p>
                <p className="stats">
                  Release Date: {this.props.dayData.release_date}
                </p>
              </span>
            ) : (
              <p></p>
            )}
            {this.props.poster ? <span></span> : <p></p>}
          </section>
        </section>
      </>
    );
  }
}
