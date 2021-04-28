import React, { Component } from 'react';
import './BookSearch.css';

class BookSearch extends Component {
  state = {
    query: '',
    sort: '',
    field: 'title'
  }

  handleSearchChange = e => {
    this.setState({ query: e.target.value });
  }

  handleSortChange = e => {
    this.setState({ sort: e.target.value });
  }

  handleFilterChange = e => {
    this.setState({ field: e.target.value });
  }

  handleSubmit = e => {
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
        <input name="search" type="text" onChange={this.handleSearchChange}/>

        <label htmlFor="sort">sort by:</label>
        <select name="sort" onChange={this.handleSortChange}>
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