import React from "react";
import Context from "../../Context";
import { NavLink } from "react-router-dom";

import "./SelectedDay.css";

export default class SelectedDay extends React.Component {
  state = {
    today: this.props.today
  };

  static contextType = Context;

  render() {
    return (
      <>
        <section className="dinner-and-movie">
          <h4 className="movie-details">
            {this.props.poster
              ? `Here's what you've planned for this day: ${this.props.dayData.title}`
              : ``}
          </h4>
          <section className="tonight-movie-card">
            {this.props.poster ? (
              <NavLink to={`/list`} className="add-move">
                <img
                  className="selected-movie-image"
                  src={this.props.poster}
                  alt="movie poster"
                />
              </NavLink>
            ) : (
              <NavLink to={`/list`} className="not-added">
                Click here to browse Alfred Hitchcock's movies.
              </NavLink>
            )}
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
            {this.props.poster ? (
              <button
                onClick={this.props.delete}
                className="delete-movie"
                style={{ backgroundColor: this.state.bgColor }}
              >
                Delete Movie From This Day
              </button>
            ) : (
              <p></p>
            )}
          </section>
        </section>
      </>
    );
  }
}
