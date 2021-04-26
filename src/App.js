import React from 'react';
import { Component } from 'react';
import logo from './react-logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
  
        My React App...
        is lit
        
        <img src={logo} className="temp-images" alt="react logo" />
        <img src="acl-logo.png" className="temp-images" alt="acl logo" />

        <Footer/>
      
      </div>
    );
  }
}

export default App;
