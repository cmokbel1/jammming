import React from 'react';

import Track from '../Track/Track';
import './TrackList.css'

export default class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track onadd={this.props.onAdd} key={track.id} track={track}/>
        })}
      </div>
    )
  }
}