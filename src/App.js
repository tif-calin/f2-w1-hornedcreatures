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

  sortFncs = {
    title: (a, b) => {
      if (a['title'] < b['title']) return -1;
      else if (a['title'] > b['title']) return 1;
      return 0;
    },
    authors: (a, b) => {
      if (a['authors'][0] < b['authors'][0]) return -1;
      else if (a['authors'][0] > b['authors'][0]) return 1;
      return 0;
    },
    oldest: (a, b) => {
      if (a.year < b.year) return -1;
      else if (a.year > b.year) return 1;
      else {
        if (a.month < b.month) return -1;
        else if (a.month > b.month) return 1;
        return 0;
      }
    },
    shortest: (a, b) => {
      if (a.wordcount < b.wordcount) return -1;
      else if (a.wordcount > b.wordcount) return 1;
      return 0;
    }
  }

  handleSearch = ({ query, queryField = 'title', sort = null, filterTags, filterAuthors }) => {
    const qRegex = new RegExp(query, 'i');

    if (!sort) sort = 'title';

    let reverse = false;
    if (sort.includes('-reverse')) {
      reverse = true;
      sort = sort.slice(0, -8);
    }

    const searched = bookData.filter(book => !query || book[queryField].match(qRegex));
    const sorted = searched.sort((a, b) => this.sortFncs[sort](a, b));
    if (reverse) sorted.reverse();

    let filtered = sorted;
    if ((filterTags.length + filterAuthors.length)) {
      filtered = sorted.filter(book => {

        if (filterTags.length) {
          for (let tag of book.tags) {
            if (filterTags.includes(tag)) return true;
          }
        }

        if (filterAuthors.length) {
          for (let author of book.authors) {
            if (filterAuthors.includes(author)) return true;
          }
        }

        return false;
      });
    } 

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
