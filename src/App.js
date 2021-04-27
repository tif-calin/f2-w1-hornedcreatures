import React from 'react';
import { Component } from 'react';
import './App.css';
import Header from './Header';
import BookSearch from './BookSearch';
import ItemList from './ItemList';
import Footer from './Footer';
import books from './data.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>

        <BookSearch/>
        <main>
          <ItemList books = {books}></ItemList>
        </main>

        <Footer/>
      
      </div>
    );
  }

}

export default App;
