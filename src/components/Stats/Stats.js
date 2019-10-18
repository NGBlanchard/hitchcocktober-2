import React from 'react';
import Nav from '../Nav/Nav'
import './Stats.css'

export default class Stats extends React.Component {
  render() {
    return(
      <>
        <Nav />
        <div className="stats-container">
          Stats
        </div>
      </>
    )
  }
}