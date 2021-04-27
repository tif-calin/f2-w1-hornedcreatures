import React from 'react';
import { Component } from 'react';
import './App.css';
import Header from './Header';
import BookSearch from './BookSearch';
import ItemList from './ItemList';
import Footer from './Footer';
import bookData from './data.js';

class App extends Component {
  state = {
    books: bookData
  }

  handleSearch(query, sort = null, field = 'title') {
    const nameRegex = new RegExp(query, 'i');

    const searched = bookData.filter(book => !query || book[field].match(nameRegex));
    const sorted = searched.sort((a, b) => {
      return 0;
    });

    this.setState({ books: sorted });
  }

  handleSort() {

  }

  render() {
    return (
      <div className="App">
        <Header/>

        <BookSearch onSearch={this.handleSearch}/>

        <main>
          <ItemList books = {bookData}></ItemList>
        </main>

        <Footer/>
      
      </div>
    );
  }

}

export default App;
