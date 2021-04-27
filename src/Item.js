import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    const book = this.props.book;

    return (
      <li className="Item wrapper-v">
        <div class="top wrapper-v">
          <h3 class="title">{book.title}<span class="subtitle">{(book.subtitle) ? `: ${book.subtitle}` : ''}</span></h3>
        </div>
        <div class="bottom wrapper-v">
          <img src={book.image} alt={`<<${book.title}>>`}></img>
          <span>{book.authors[0]}</span>
        </div>
      </li>
    );
  }
}

export default Item;