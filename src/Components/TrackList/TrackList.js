import React from 'react';

import Track from '../Track/Track';
import './TrackList.css'

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        The Beatles - Hey Jude 
        Linkin Park - Hands Held High 
        The Killers - When You Were Young 
      </div>
    )
  }
}