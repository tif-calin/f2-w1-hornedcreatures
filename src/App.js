import React from 'react';
import { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import creatures from './creatures.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
  
        <main>
          <CreatureList creatures = {creatures}></CreatureList>
        </main>

        <Footer/>
      
      </div>
    );
  }
}

export default App;
