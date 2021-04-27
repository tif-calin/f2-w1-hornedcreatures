import React, { Component } from 'react';
import Item from './Item';
import './ItemList.css';

class ItemList extends Component {
  render() {
    const books = this.props.books;

    return (
      <ul className="ItemList wrapper-h">
        {books.map(book => <Item key={book.isbn13} book={book}/>)}
      </ul>
    );
  }
}

export default ItemList;