import React, { Component } from 'react';
import './FilterCheckbox.css';

class FilterCheckbox extends Component {

  render() {
    const val = this.props.val;
    const onchange = this.props.onchange;
    
    return (
      <label className="FilterCheckbox"><input type="checkbox" value={val} onChange={onchange}/>{val}</label>
    );
  }
};

export default FilterCheckbox;