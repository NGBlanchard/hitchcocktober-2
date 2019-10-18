import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import './Nav.css'


export default class Nav extends React.Component {
  // handleLogoutClick = () => {
  //   TokenService.clearAuthToken()
  //   sessionStorage.clear();
  //   window.location.href = '/login';
  // }

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
        <NavLink
          to='/register'>
          Register
        </NavLink>
        {' '}
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
      <Link to='/calendar'>
          Hitchcocktober
        </Link>
        {' '}
        <Link to='/list'>
          Movie List
        </Link>
        {' '}
        <Link to='/stats'>
          User Stats
        </Link>
        {' '}
        <Link to='/about'>
          About
        </Link>  
        {/* {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()} */}
      </nav>
    )
  }
}