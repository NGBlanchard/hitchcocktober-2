import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import LoginNav from "../Nav/LoginNav";
import "./RegistrationPage.css";
import welcome from "../../images/welcome.png";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <>
        <LoginNav />
        <section className="RegistrationPage">
          <h1 className="welcome-header">
            <img src={welcome} alt="welcome" className="welcome-header" />
          </h1>
          <p>Every October, use this app to celebrate the films of Alfred Hitchcock.
            Browse a list of the movies he directed, and schedule them across your
            own personalized month.
          </p>
          <h2>Register Below</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </section>
      </>
    );
  }
}
