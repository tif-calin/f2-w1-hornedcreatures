import React, { Component } from 'react';
import './BookSearch.css';
import bookData from './data.js';
import FilterCheckbox from './FilterCheckbox';
import { getUniquePropList } from './utils.js';

class BookSearch extends Component {
  state = {
    query: '',
    queryField: 'title',
    sort: '',
    filterTags: [],
    filterAuthors: []
  }

  handleSearchChange = e => {
    this.setState({ query: e.target.value });
  }

  handleSearchFieldChange = e => {
    this.setState({ queryField: e.target.value });
  }

  handleSortChange = e => {
    this.setState({ sort: e.target.value });
  }

  handleTagFilterChecked = val => {
    this.setState({ filterTags: [...this.state.filterTags, val] });
  }

  handleTagFilterUnchecked = val => {
    this.setState({ filterTags: this.state.filterTags.filter(tag => tag !== val) });
  }

  handleAuthorFilterChecked = val => {
    this.setState({ filterAuthors: [...this.state.filterAuthors, val] });
  }

  handleAuthorFilterUnchecked = val => {
    this.setState({ filterAuthors: this.state.filterAuthors.filter(tag => tag !== val) });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) this.props.onSearch(this.state);
  }

  render() {
    const authors = getUniquePropList(bookData, 'authors');
    const tags = getUniquePropList(bookData, 'tags');

    return (
      <form className="BookSearch wrapper-h" onSubmit={this.handleSubmit}>
        <label htmlFor="search">search:</label>
        <input name="search" type="text" onChange={this.handleSearchChange}/>
        {/*<select>
          <option>title</option>
          <option>author</option>
          <option>subtitle</option>
        </select>*/}

        <label htmlFor="sort">sort by:</label>
        <select name="sort" onChange={this.handleSortChange}>
          <optgroup label="alphabetical">
            <option value="title">title</option>
            <option value="authors">author</option>
          </optgroup>
          <optgroup label="date">
            <option value="oldest-reverse">newest</option>
            <option value="oldest">oldest</option>
          </optgroup>
          <optgroup label="reading length">
            <option value="shortest">shortest</option>
            <option value="shortest-reverse">longest</option>
          </optgroup>
        </select>
        {/*<button>🔄</button>*/}

        <label htmlFor="filter">filter:</label>
        <div name="filter" className="dropdown">
          <button>&#x2B07;</button>
          <div className="dropdown-content">
            <fieldset className="wrapper-v">
              <legend>tags</legend>
              {tags.map(tag => <FilterCheckbox key={tag} val={tag} onChecked={this.handleTagFilterChecked} onUnchecked={this.handleTagFilterUnchecked}/>)}
            </fieldset>
            <fieldset className="wrapper-v">
              <legend>authors</legend>
              {authors.map(author => <FilterCheckbox key={author} val={author} onChecked={this.handleAuthorFilterChecked} onUnchecked={this.handleAuthorFilterUnchecked}/>)}
            </fieldset>
          </div>
        </div>
      </form>
    );
  }
}

export default BookSearch;