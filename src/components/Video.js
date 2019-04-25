import React from 'react';
import ReactPlayer from 'react-player';

import StykedVideoWrapper from './styles/StyledVideoWrapper';
import StyledVideo from './styles/StylesdVideo';

const Video = props => (
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0" }}
        playing={autoplay}
        controls={true}
        url={active.video}
        onEnded={endedCallback}
        onProgress={progressCallback}
      />
    </StyledVideoWrapper>
  </StyledVideo>
)

export default Video;