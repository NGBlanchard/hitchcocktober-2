import React from 'react'
import Context from '../../Context'
import moment from 'moment';


import './Day.css'

export default class Day extends React.Component {
  state = {
    dateContext: moment(),
  }
  
  static contextType = Context



  currentDay = () => { return this.state.dateContext.format("D") }

  render() {
    let currentDay = (this.props.day === this.currentDay() ? "calendar-day current-day ": "calendar-day");
    let selectedDay = (this.props.day === this.props.selectedDay ? " selected-day " : "")
    
    return (
      <div 
        className={currentDay + selectedDay}
        onClick={()=>{this.props.onDayClick(this.props.day)}}>
        {this.props.day}
      </div>
    )
  }
}