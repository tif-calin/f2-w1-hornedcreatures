import React, { Component } from 'react';
import './FilterCheckbox.css';

class FilterCheckbox extends Component {

  handleChange = ({ target }) => {
    if (target.checked) this.props.onChecked(target.value);
    else this.props.onUnchecked(target.value);
  };

  render() {
    const val = this.props.val;
    
    return (
      <label className="FilterCheckbox">
        <input type="checkbox" value={val} onChange={this.handleChange}/>{val}
      </label>
    );
  }
};

export default FilterCheckbox;