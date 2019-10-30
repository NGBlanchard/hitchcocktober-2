import React from 'react';
import Context from '../../Context'
import { NavLink } from "react-router-dom";
// import ApiService from '../../services/api-service';

import './SelectedDay.css'


export default class SelectedDay extends React.Component {
  state = {
    selectedDay: null,
  }

  static contextType = Context

 renderPoster(day) {
   const seekDay = 'oct'+day
   console.log(seekDay)
  // const  {oct1, oct2, oct3, oct4, oct5, oct6, oct7, oct8, oct9,
  // oct10, oct11, oct12, oct13, oct14, oct15, oct16, oct17, oct18,
  // oct19, oct20, oct21, oct22, oct23, oct24, oct25, oct26, oct27, oct28,
  // oct29, oct30, oct31 } = this.props.userData
  console.log()  
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