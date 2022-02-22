import { render } from '@testing-library/react';
import React from 'react';
import './Track.css';

export class Track extends React.Component {
  renderAction() {
    if (isRemoval) {
      <button className="Track-action">-</button>
    } else if (!isRemoval) {
      <button className = "Track-action">+</button>
    }
  }
  
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.name}}</h3>
          <p>{this.artist}| {this.album}</p>
        </div>
        <button className="Track-action">{this.renderAction()}</button>
      </div>
    )
  }
}