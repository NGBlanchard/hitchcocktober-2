import React from 'react';
import moment from 'moment';
import Context from '../../Context'
import SelectedDay from '../SelectedDay/SelectedDay'
import Nav from '../Nav/Nav'
import Day from '../Day/Day'
// import ApiService from '../../services/api-service';
import './Calendar.css';


export default class Calendar extends React.Component {
  state = {
    selectedDay: moment().format("D"),
    user: null,
}

static contextType = Context

weekdays = moment.weekdays(); 
weekdaysShort = moment.weekdaysShort();

firstDayOfMonth = () => {
    let firstDay = moment().startOf('month').format('d');
    return firstDay;
}

onDayClick = (day) => {
    this.setState({
        selectedDay: day
    })
  }

renderDays() {
    const { octDays = [] } = this.context
    let notOct = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
        notOct.push(<div key={i * 63} className="notOct">{""}</div>);
    }
    var totalCells = [...notOct, ...octDays];
    return totalCells.map((day, index) =>
        <Day
            key={index}
            day={day}
            selectedDay={this.state.selectedDay}
            onDayClick={this.onDayClick}
            userId={this.state.userId}
        />
        )}

    render() {
        const { error } = this.context
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <div key={day} className="week-day">{day}</div>
            )
        });
        
        return (
            <>
             <Nav />
             <div className="calendar-container">
                    <div className="calendar-header">
                        <h1 className="hitchcocktober">
                            Hitchcocktober {' '} 2019
                            {/* <this.YearNav /> */}
                        </h1>
                    </div>
                    <div className="week">
                        {weekdays}
                    </div>
                    <section className='calendar-grid'>
                        {error ? 
                        <p className='red'>There was an error. Try something else, y'know?</p> 
                        : this.renderDays()}
                    </section>
             </div>
             <div className="selected-day-container">
                 <SelectedDay day={this.state.selectedDay} userData={this.props.userData}/>
             </div>
          </>
        )
    }
}



