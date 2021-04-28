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

  handleSearch = ({ query, sort = null, queryField = 'title' }) => {
    const qRegex = new RegExp(query, 'i');

    const searched = bookData.filter(book => !query || book[queryField].match(qRegex));
    const sorted = searched.sort((a, b) => {
      if (sort === 'title') {
        if (a[sort] < b[sort]) return -1;
        else if (a[sort] > b[sort]) return 1;
      } else if (sort === 'authors') {
        if (a[sort][0] < b[sort][0]) return -1;
        else if (a[sort][0] > b[sort][0]) return 1;
      } 
      return 0;
    });
    const filtered = sorted.filter(book => true);

    this.setState({ books: filtered });
  }

  render() {
    return (
      <div className="App">
        <Header/>

        <BookSearch onSearch={this.handleSearch}/>

        <main>
          <ItemList books = {this.state.books}></ItemList>
        </main>

        <Footer/>
      
      </div>
    );
  }

}

export default App;
