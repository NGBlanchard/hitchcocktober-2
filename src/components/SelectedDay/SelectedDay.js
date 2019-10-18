import React from 'react';
import Context from '../../Context'

import './SelectedDay.css'


export default class SelectedDay extends React.Component {
  
  static contextType = Context

  render() {
    return (
      <>
      <h2 className="date-banner">
        October {this.props.day}
      </h2>
      <div>
        Movie:

        <br />
        Menu: 
      </div>
      </>
    )
  }
}