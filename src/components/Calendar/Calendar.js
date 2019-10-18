import React from 'react';
import moment from 'moment';
import Context from '../../Context'
import SelectedDay from '../SelectedDay/SelectedDay'
import Nav from '../Nav/Nav'

import './Calendar.css';

export default class Calendar extends React.Component {
  state = {
    dateContext: moment(),
    showYearPopup: false,
    selectedDay: moment().get("D")
}

static contextType = Context

    weekdays = moment.weekdays(); 
    weekdaysShort = moment.weekdaysShort(); 

    year = () => { return this.state.dateContext.format("Y") }
    currentDate = () => { return this.state.dateContext.get("date") }
    currentDay = () => { return this.state.dateContext.format("D") }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    }

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }

    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }

    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav = () => {
        return (
            this.state.showYearNav ?
            <input
                defaultValue ={this.year()}
                className="editor-year"
                ref={(yearInput) => { this.yearInput = yearInput}}
                onKeyUp= {(e) => this.onKeyUpYear(e)}
                onChange = {(e) => this.onYearChange(e)}
                type="number"
                placeholder="year"/>
            :
            <span
                className="label-year"
                onClick={(e)=> { this.showYearEditor()}}>
                {this.year()}
            </span>
        );
    }

    onDayClick = (e, day) => {
        this.setState({
            selectedDay: day
        })
    }

    render() {
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        });

        let notOct = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            notOct.push(<td key={i * 63} className="emptySlot">
                {""}
                </td>
            );
        }

        let daysInMonth = [];
        for (let d = 1; d <= 31; d++) {
            let className = (d === this.currentDay() ? "day current-day": "day");
            let selectedClass = (d === this.state.selectedDay ? " selected-day " : "")
            daysInMonth.push(
                <td key={d} className={className + selectedClass} >
                    <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
                </td>
            );
        }

        var totalCubbies = [...notOct, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalCubbies.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalCubbies.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let tableElements = rows.map((d, i) => {
            return (
                <tr key={i*100}>
                    {d}
                </tr>
            );
        })

        return (
            <>
            <Nav />
            <div className="calendar-container">
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td colSpan="7">
                                <h1>
                                Hitchcocktober
                                {' '}
                                <this.YearNav />
                                </h1>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {tableElements}
                    </tbody>
                </table>
            </div>
            <div className="selected-day-container">
                <SelectedDay day={this.state.selectedDay}/>
            </div>
            </>
        );
    }
}
