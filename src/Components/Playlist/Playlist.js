import React from 'react';

import TrackList from '../TrackList/TrackList';
import './Playlist.css';

export class Platlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        {/* <TrackList /> */}
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}