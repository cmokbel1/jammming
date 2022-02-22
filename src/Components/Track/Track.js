import { render } from '@testing-library/react';
import React from 'react';
import './Track.css';

export default class Track extends React.Component {
  constructor(props) {
    super(props)
    this.addTrack = this.addTrack.bind(this)

  }
  addTrack() {
    this.props.onAdd(this.props.track)
  }
  
  renderAction() {
    if (this.props.isRemoval) {
      <button className="Track-action">-</button>
    } else {
      <button className = "Track-action">+</button>
    }
  }
  
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist}| {this.props.track.album}</p>
        </div>
        <button className="Track-action">{this.renderAction()}</button>
      </div>
    )
  }
}