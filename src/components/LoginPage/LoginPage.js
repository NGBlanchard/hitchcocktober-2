import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

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
      <section className='LoginPage'>
      <div className="success-alert">
        </div>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.onLoginSuccess}
        />
      </section>
      </>
    )
  }
}
