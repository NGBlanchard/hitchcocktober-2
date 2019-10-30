import React from 'react';
import Context from '../../Context'
import { NavLink } from "react-router-dom";
// import ApiService from '../../services/api-service';
import TokenService from '../../services/token-service'

import './SelectedDay.css'
import ApiService from '../../services/api-service';


export default class SelectedDay extends React.Component {
  state = {
    selectedDay: null,
  }

  static contextType = Context

 renderPoster(day) {
  
  }
 
  render() {
    const { id } = this.props.userData
    console.log(id)
    

    return (
      <>
      <h2 className="date-banner">
        October {this.props.day}
      </h2>
      <section className="dinner-and-movie">
        <NavLink to={`/list`} className="add-move">
          {this.renderPoster(this.props.day)}
          <img className="selected-movie-image" src='https://dummyimage.com/200x300/000/fff.png&text=Add+Movie' alt="add movie"/>
        </NavLink>

        <img className="add-meal" src='https://dummyimage.com/200x300/000000/fff.png&text=Add+Meal' alt="add meal" />
      </section>
      </>
    )
  }
}