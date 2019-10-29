import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import TokenService from '../../services/token-service.js'
import './Nav.css'


export default class LoginNav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    sessionStorage.clear();
    window.location.href = '/login';
  }

  renderLogoutLink() {
    return (
      <div className='Nav__logged-in'>
        <NavLink
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </NavLink>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Nav__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Nav'>  
      <Link to='/register'>
          Register
        </Link>
        
        {' '}
        <Link to='/about'>
          About
        </Link> 
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}