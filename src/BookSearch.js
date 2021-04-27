import React, { Component } from 'react';
import './BookSearch.css';

class BookSearch extends Component {
  state = {
    query: '',
    sort: '',
    field: ''
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) this.props.onSearch(this.state);
  }

  render() {
    return (
      <form className="BookSearch wrapper-h" onSubmit={this.handleSubmit}>
        <label htmlFor="search">search:</label>
        <input name="search" type="text"/>
        <label htmlFor="sort">sort by:</label>
        <select name="sort">
          <optgroup label="alphabetical">
            <option value="title">title</option>
            <option value="author">author</option>
          </optgroup>
          <optgroup label="date">
            <option value="date-ascending">newest</option>
            <option value="date-descending">oldest</option>
          </optgroup>
          <optgroup label="reading length">
            <option value="readingLength-ascending">shortest</option>
            <option value="readingLength-descending">longest</option>
          </optgroup>
        </select>
        {/* <label htmlFor="filter">filter:</label>
        <input name="filter"/> */}
      </form>
    );
  }
}

export default BookSearch;