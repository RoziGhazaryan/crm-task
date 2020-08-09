import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
  return (
    <BrowserRouter history={window.routerHistory}>
      <div className="App">
        <Header />
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
