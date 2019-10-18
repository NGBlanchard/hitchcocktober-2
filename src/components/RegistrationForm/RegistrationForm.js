import React, { Component } from 'react'
import { nonEmpty, matches, length, isTrimmed } from '../Utils/Utils'
import Service from '../../services/api-service';

const passwordLength = length({min: 8, max: 60})
const matchesPassword = matches('password')

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {
    }
  }
  state = { error: null }


  onSubmit = e => {
    e.preventDefault()
    const { user_name, password } = e.target
    this.setState({ error: null })
    Service.postUser({
      user_name: user_name.value,
      password: password.value,
    })
    .then(user => {
      user_name.value = ''
      password.value = ''
          this.props.onRegistrationSuccess(
            alert("Registration successful. Now log in to access Curricula")
          )
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.onSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <required />
          </label>
          <input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <required />
          </label>
          <input
            name='password'
            type='password'
            required
            validate={[passwordLength, isTrimmed]}
            id='RegistrationForm__password'>
          </input>
        </div>
        <div className='password-confirm'>
          <label htmlFor='RegistrationForm__password-confirm'>
            Confirm Password <required />
          </label>
        <div className="login-signup-field">
          <input 
            name="passwordConfirmation"  
            type="password" 
            required
            validate={[ nonEmpty, matchesPassword]}/>
        </div>
        </div>
        <button type='submit'>
          Sign me up
        </button>
      </form>
    )
  }
}
