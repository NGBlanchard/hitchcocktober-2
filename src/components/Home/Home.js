import React from 'react';
import Nav from '../Nav/Nav'
import Context from '../../Context'
// import TokenService from "../../services/token-service";

import './Home.css'

export default class Home extends React.Component {
  state = {
    dayData: {}
  }
  static contextType = Context
  
  render() {
    return(
      <div>
        <Nav />
        <h1>USER HOME SCREEN</h1>
      </div>
    )
  }
}