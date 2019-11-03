import React, { Component } from 'react'
import { nonEmpty, matches, length, isTrimmed } from '../Utils/Utils'
import ApiService from '../../services/api-service';

import './RegistrationForm.css'

const passwordLength = length({min: 8, max: 60})
const matchesPassword = matches('password')

export default class RegistrationForm extends Component {
  state = {
    error: null,
    success: false
  };

  onSubmit = e => {
    e.preventDefault();
    const { user_name, password, passwordConfirmation } = e.target;
    this.setState({ error: null });
    ApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        user_name.value = "";
        password.value = "";
        passwordConfirmation.value = "";
        this.setState({
          success: true
        });
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <>
        {this.state.success ? (
          <p className="success">Registration Successful! Click on the Login link above to get started.</p>
        ) : (
          <p className="directions">
            Heads up: your password must contain 1 upper case, lower case,
            number and special character.
          </p>
        )}
        <form className="RegistrationForm" onSubmit={this.onSubmit}>
          <span role="alert">{error && <p className="red">{error}</p>}</span>
          <section className="user_name">
            <label htmlFor="RegistrationForm__user_name">
              User name 
            </label>
            <input
              name="user_name"
              type="text"
              required
              id="RegistrationForm__user_name"
            ></input>
          </section>
          <section className="password">
            <label htmlFor="RegistrationForm__password">
              Password 
            </label>
            <input
              name="password"
              type="password"
              required
              validate={[passwordLength, isTrimmed]}
              id="RegistrationForm__password"
            ></input>
          </section>
          <section className="password-confirm">
            <label htmlFor="RegistrationForm__password-confirm">
              Confirm Password 
            </label>
            <div className="login-signup-field">
              <input
                name="passwordConfirmation"
                type="password"
                required
                validate={[nonEmpty, matchesPassword]}
              />
            </div>
          </section>
          <button type="submit">Sign me up</button>
        </form>
      </>
    );
  }
}