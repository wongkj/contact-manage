import React, { Component } from 'react';
import './App.css';

import { Provider } from './context';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Contacts from './components/Contacts';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header
            branding="Contact Manage"
          ></Header>
          <div className="container">
          <Contacts></Contacts>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
