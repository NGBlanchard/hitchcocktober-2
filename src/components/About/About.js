import React from 'react';
import Nav from '../Nav/LoginNav'
import './About.css'

export default class Stats extends React.Component {
  render() {
    return(
      <>
        <Nav />
        <div className="about-container">
          About the app
        </div>
      </>
    )
  }
}