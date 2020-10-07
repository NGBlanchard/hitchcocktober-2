import React from "react";
import Context from "../../Context";
import SelectedDay from "../SelectedDay/SelectedDay";
import Nav from "../Nav/Nav";
import "./Home.css";
import hitchcocktober from "../../images/hitchcocktober-head-gray.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ApiService from "../../services/api-service";

export default class Home extends React.Component {
  state = {
    dayData: {},
    poster: "",
    selectedDay: new Date(),
    user: null,
    deleted: false,
    error: null,
  };

  static contextType = Context;

  onChange = (day) => {
    this.setState({ selectedDay: day });
    const foundDays = this.context.bigObj;
    const seekDay = "oct" + day.getDate().toString();
    const dayData = foundDays[seekDay];
    if (!dayData) {
      this.setState({
        poster: "",
      });
      if (!dayData) {
        return;
      }
    }
    const [film] = this.context.list.filter(
      (movie) => movie.id === dayData.movie_id
    );
    this.setState({
      dayData: film,
    });
    film !== undefined
      ? this.setState({
          poster: film.poster_path,
        })
      : this.setState({
          poster: "",
        });
    this.setState({
      deleted: false,
    });
  };

  onDayClick = (day) => {
    this.setState({
      selectedDay: day,
    });
    const foundDays = this.context.bigObj;
    const seekDay = "oct" + day.toString();
    const dayData = foundDays[seekDay];
    if (!dayData) {
      this.setState({
        poster: "",
      });
      if (!dayData) {
        return;
      }
    }
    const [film] = this.context.list.filter(
      (movie) => movie.id === dayData.movie_id
    );
    this.setState({
      dayData: film,
    });
    film !== undefined
      ? this.setState({
          poster: film.poster_path,
        })
      : this.setState({
          poster: "",
        });
    this.setState({
      deleted: false,
    });
  };

  deleteMovie = () => {
    const patch = {
      movie_id: null,
      movie: "",
      rating: null,
      poster_path: "",
      user_id: null,
    };
    const finPatch = {};
    finPatch[`oct${this.state.selectedDay}`] = patch;
    const day = [`oct${this.state.selectedDay}`];
    ApiService.patchDay(finPatch);
    this.context.updateBigObj(finPatch, day);
    this.setState({
      deleted: true,
    });
  };

  render() {
    const { error } = this.context;
    console.log(this.state.selectedDay.getDate());

    return (
      <section className="home-cont">
        <Nav />

        <h1 className="hitchcocktober">
          <div>
            <img
              src={hitchcocktober}
              alt="hitchcocktober"
              className="calendar-head"
            />
          </div>
        </h1>
        <section className="calendar-cont">
          <Calendar onChange={this.onChange} value={this.state.selectedDay} />
        </section>

        {this.state.deleted === false ? (
          <div className="selected-day-container">
            <SelectedDay
              poster={this.state.poster}
              day={this.state.selectedDay}
              dayData={this.state.dayData}
              delete={this.deleteMovie}
            />
          </div>
        ) : (
          <div className="deleted-container">
            <p className="deleted">Deleted!</p>
          </div>
        )}
      </section>
    );
  }
}
