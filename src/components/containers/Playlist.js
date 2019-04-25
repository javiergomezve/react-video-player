import React from 'react';

import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = props => (
  <StyledPlaylist>
    <NightMode />
    <PlaylistItems />
    <PlaylistItems />
  </StyledPlaylist>
)

export default Playlist;