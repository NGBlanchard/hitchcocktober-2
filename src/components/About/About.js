import React from 'react';
import LoginNav from '../Nav/LoginNav'
import './About.css'

export default class Stats extends React.Component {
  render() {
    return(
      <>
        <LoginNav />
        <div className="about-container">
          About
        </div>
      </>
    )
  }
}