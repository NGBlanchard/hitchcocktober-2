import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import LoginNav from '../Nav/LoginNav'
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  onLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/calendar'
    history.push(destination)
  }

  render() {
    return (
      <>
      <LoginNav />
      <section className='LoginPage'>
      <div className="success-alert">
        </div>
        <h2>Welcome to Hitchcocktober</h2>
        <p>Please login below</p>
        <LoginForm
          onLoginSuccess={this.onLoginSuccess}
        />
      </section>
      </>
    )
  }
}
