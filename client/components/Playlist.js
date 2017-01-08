import React from 'react';

const Playlist = ({uri, size}) => (
  <div>
    <iframe src={uri} frameBorder="0" allowTransparency="true" height={size.height} width={size.width} ></iframe>
  </div>
)

export default Playlist;
