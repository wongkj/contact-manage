import React, { Component } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          branding="Contact Manage"
        ></Header>
        <div className="container">
          <Contact
            name="John"
            email="jdoe@gmail.com"
            phone="444-444-4444"
          ></Contact>        
          <Contact
            name="Karen"
            email="hello@gmail.com"
            phone="333-333-3333"
          ></Contact>
        </div>
      </div>
    );
  }
}

export default App;
