import React from 'react';

import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = ({ videos, active, nigthModeCallback, nightMode }) => (
  <StyledPlaylist>
    <NightMode nigthModeCallback={nigthModeCallback} nightMode={nightMode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
)

export default Playlist;