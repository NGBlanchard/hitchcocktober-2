import React, { Component } from "react";
import ApiService from "../../services/api-service";
import TokenService from "../../services/token-service";
import Context from "../../Context";

import './LoginForm.css'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: (id) => {}
  };

  state = { error: null };
  static contextType = Context;

  handleAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;
    ApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.setUser(res.user.user_name);
        TokenService.setDate(res.user.date_created);
        TokenService.setUserId(res.user.id);
        this.props.onLoginSuccess(res.user.id);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <React.Fragment>
        <form className="LoginForm" onSubmit={this.handleAuth}>
          <span role="alert">{error && <p className="red">{error}</p>}</span>
          <section className="user_name">
            <label htmlFor="LoginForm__user_name">Username</label>
            <input name="user_name" id="LoginForm__user_name"/>
          </section>
          <section className="password">
            <label htmlFor="LoginForm__password">Password</label>
            <input
              name="password"
              type="password"
              id="LoginForm__password"
            />
          </section>
          <button type="submit">Login</button>
        </form>
      </React.Fragment>
    );
  }
}
