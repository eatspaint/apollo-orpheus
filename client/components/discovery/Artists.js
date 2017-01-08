import React from 'react';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.addArtist = this.addArtist.bind(this);
  }

  addArtist(e) {
    e.preventDefault();
    this.props.addArtist(this.refs.artist);
  }

  render() {
    let artists = this.props.artists.map( artist => {
      return(<li key={artist}>{artist}</li>)
    });
    return(
      <div>
        <p>Artist Entry</p>
        <form onSubmit={(e) => this.addArtist(e)}>
          <input ref='artist'></input>
        </form>
        <ul>{artists}</ul>
      </div>
    )
  }
}

export default Artists;