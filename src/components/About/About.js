import React from 'react';
import Nav from '../Nav/Nav'
import './About.css'

export default class Stats extends React.Component {
  render() {
    return(
      <>
        <Nav />
        <div className="about-container">
          About
        </div>
      </>
    )
  }
}