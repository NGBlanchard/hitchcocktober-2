import React from 'react';
import Nav from '../Nav/Nav'
// import ApiService from '../../services/api-service';
import Context from '../../Context'
// import TokenService from "../../services/token-service";

import './Home.css'

export default class Home extends React.Component {
  
  static contextType = Context
  
  // componentDidMount() {
  //   const user = TokenService.getUserId()
  //   ApiService.getMovies()
  //     .then(res => this.context.setList(res))
  //   ApiService.getUserData(user)
  //     .then(res => this.context.setBigObj(res))
  // }

  
  
  render() {
    return(
      <div>
        <Nav />
        <h1>USER HOME SCREEN</h1>
      </div>
    )
  }
}