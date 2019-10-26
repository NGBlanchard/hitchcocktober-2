import React from 'react';
import Nav from '../Nav/Nav'
import './Stats.css'
import Context from '../../Context'


export default class Stats extends React.Component {
  

  static contextType = Context

  
  
  render() {
    return(
      <>
        <Nav />
        <div className="stats-container">
          
        </div>
      </>
    )
  }
}