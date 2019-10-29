import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from "./components/Utils/PrivateRoute";
import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";
import Calendar from './components/Calendar/Calendar'
import Home from './components/Home/Home'
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import List from './components/List/List'
import Stats from './components/Stats/Stats'
import About from './components/About/About'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import Context from './Context'


class App extends React.Component {
  state = { 
    list: [],
    hasError: false }

  static contextType = Context

  componentDidMount() {
    return fetch(`http://localhost:8000/movies`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => this.setState({
        list: res
      }))
      .then(res => this.context.setList(this.state.list))
  }

  render() {
  return (
    <>
      <div className='App'>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error. Reconsider everything.</p>}
          <Switch>
            <PublicOnlyRoute
              exact
              path={'/'}
              component={Home}
            />
            <PublicOnlyRoute
              restrictied={false}
              exact
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              restrictied={true}
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute 
              path={'/calendar'}
              component={Calendar}
            />
            <PrivateRoute 
              path={'/list'}
              component={List}
            />
            <PrivateRoute  
              path={'/stats'} 
              component={Stats} />
            <PublicOnlyRoute 
              path={'/about'} 
              component={About} />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
      </>
    );
  }
}

export default App;
