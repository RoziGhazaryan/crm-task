import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
// import { createBrowserHistory } from 'history';
// window.routerHistory = createBrowserHistory();

const App = (props) => {
  return (
    <BrowserRouter history={window.routerHistory}>
      <div className="App">
        <Switch>
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/dialogs' component={Dialogs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
