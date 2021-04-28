import React, { Component } from 'react';
import './FilterCheckbox.css';

class FilterCheckbox extends Component {

  render() {
    const val = this.props.val;
    
    return (
      <label className="FilterCheckbox"><input type="checkbox" value={val}/>{val}</label>
    );
  }
};

export default FilterCheckbox;