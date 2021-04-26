import React, { Component } from 'react';
import './CreatureItem.css';

class CreatureItem extends Component {
  render() {
    const creature = this.props.creature;

    return (
      <li className="CreatureItem wrapper-v">
        <h3>{creature.title}</h3>
        <span>{creature.keyword}</span>
        <img src={creature.url} alt={`<<${creature.title} image>>`}></img>
        
      </li>
    );
  }
}

export default CreatureItem;