import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Hitchcocktober from './components/Hitchcocktober'
import Calendar from './components/Calendar/Calendar'
import Home from './components/Home/Home'
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import List from './components/List/List'
import Stats from './components/Stats/Stats'
import About from './components/About/About'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import { ContextProvider } from './Context'

class App extends React.Component {
  state = { hasError: false }

  render() {
  return (
    <ContextProvider>
      <div className='App'>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error. Reconsider everything.</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={Home}
            />
            <Route
              restrictied={false}
              exact
              path={'/login'}
              component={LoginPage}
            />
            <Route
              restrictied={true}
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              path={'/calendar'}
              component={Calendar}
            />
            <Route
              path={'/list'}
              component={List}
            />
            <Route 
              path={'/stats'} 
              component={Stats} />
            <Route 
              path={'/about'} 
              component={About} />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
      </ContextProvider>
    );
  }
}

export default App;
