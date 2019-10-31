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
            {/* <h4 className="movie-details">
              Tonight, you are watching {this.props.dayData.movie}
            </h4> */}
            {/* <h4 className="movie-details">Want to watch a movie?</h4> */}
          </section>

          {/* <img
            className="add-meal"
            src="https://dummyimage.com/200x300/000000/fff.png&text=Add+Meal"
            alt="add meal"
          /> */}
        </section>
      </>
    );
  }
}
