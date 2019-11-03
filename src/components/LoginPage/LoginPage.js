import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginNav from "../Nav/LoginNav";
import Context from "../../Context";
import "./LoginPage.css";
import config from "../../config";
import TokenService from "../../services/token-service";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  static contextType = Context;

  getUserData(id) {
    return fetch(`${config.API_ENDPOINT}/users/${id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => this.context.setBigObj(res));
  }

  getMovies() {
    return fetch(`${config.API_ENDPOINT}/movies`, {
      headers: {}
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => this.context.setList(res));
  }

  getUserBigObject(id) {
    return Promise.all([this.getMovies(), this.getUserData(id)]);
  }

  onLoginSuccess = id => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/calendar";
    this.getUserBigObject(id).then(([movies, userData]) => {
      history.push(destination);
    });
  };

  render() {
    return (
      <>
        <LoginNav />
        <section className="LoginPage">
          <div className="success-alert"></div>
          <h2>Welcome to Hitchcocktober</h2>
          <p>Please login below</p>
          <LoginForm onLoginSuccess={this.onLoginSuccess} />
        </section>
      </>
    );
  }
}
