import React from "react";
import moment from "moment";
import Context from "../../Context";
import SelectedDay from "../SelectedDay/SelectedDay";
import Nav from "../Nav/Nav";
import Day from "../Day/Day";
import "./Calendar.css";
import hitchcocktober from "../../images/hitchcocktober-head-gray.png";
import ApiService from "../../services/api-service";

export default class Calendar extends React.Component {
  state = {
    dayData: {},
    poster: "",
    selectedDay: moment().format("D"),
    user: null,
    deleted: false,
  };

  static contextType = Context;

  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();

  firstDayOfMonth = () => {
    let firstDay = moment()
      .startOf("month")
      .format("d");
    return firstDay;
  };

  onDayClick = day => {
    this.setState({
      selectedDay: day
    });
    const foundDays = this.context.bigObj;
    const seekDay = "oct" + day.toString();
    const dayData = foundDays[seekDay];
    if (!dayData) {this.setState({
      poster: ""})
    if (!dayData) {return}}
    const [film] = this.context.list.filter(
      movie => movie.id === dayData.movie_id
    );
    this.setState({
      dayData: film
    });
    film !== undefined
      ? this.setState({
          poster: film.poster_path
        })
      : this.setState({
          poster: ""
        });
    this.setState({
      deleted: false
    })
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
      deleted: true
    })
  };

  renderDays() {
    const octDays = Object.keys(this.context.octDays2);
    let notOct = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      notOct.push(
        <div key={i * 63} className="notOct">
          {""}
        </div>
      );
    }
    var totalCells = [...notOct, ...octDays];
    
    return totalCells.map((day, index) => (
      <Day
        key={index}
        day={day}
        selectedDay={this.state.selectedDay}
        onDayClick={this.onDayClick}
        userId={this.state.userId}
      />
    ));
  }

  render() {
    const { error } = this.context;
    let weekdays = this.weekdaysShort.map(day => {
      return (
        <div key={day} className="week-day">
          {day}
        </div>
      );
    });

    return (
      <>
        <Nav />
        <div className="page-container">
        <div className="calendar-container">
          <div className="calendar-header">
            <h1 className="hitchcocktober">
              <div>
                <img
                  src={hitchcocktober}
                  alt="hitchcocktober"
                  className="calendar-head"
                />
              </div>
            </h1>
          </div>
          <div className="week">{weekdays}</div>
          <section className="calendar-grid">
            {error ? (
              <p className="red">
                There was an error. Try something else, y'know?
              </p>
            ) : (
              this.renderDays()
            )}
          </section>
        </div>
        {this.state.deleted === false ? 
        <div className="selected-day-container">
            <SelectedDay
              poster={this.state.poster}
              day={this.state.selectedDay}
              dayData={this.state.dayData}
              delete={this.deleteMovie}
            />
        </div>
        : <div className="deleted-container"><p className="deleted">Deleted!</p></div>}
        </div>
      </>
    );
  }
}
