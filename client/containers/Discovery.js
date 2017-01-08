import React from 'react';
import Artists from '../components/discovery/Artists'
import Playlist from '../components/Playlist'

class Discovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artists: [], tracks: [], limit: 100 }
    this.addArtist = this.addArtist.bind(this);
    this.generatePlaylist = this.generatePlaylist.bind(this);
  }

  addArtist(artist) {
    let artists = this.state.artists;
    if (artists.indexOf(artist) == -1) {artists.push(artist.value)}
    if (artists.length > 5) {artists = artists.slice(-5)}
    this.setState({artists: artists}, () => {artist.value = ''});
  }

  generatePlaylist() {
    $.ajax({
      url: '/discoveries/generate',
      type: 'POST',
      data: { artists: this.state.artists, limit: this.state.limit }
    }).done( data => {
      this.setState({tracks: data.tracks});
    }).fail( err => {
      console.log(err);
    })
  }

  render() {
    let name = "Discovery Mix";
    let tracks = this.state.tracks.map( t => {return(t.id)}).join(',');
    return(
      <div>
        <h1>Discovery</h1>
        <Artists artists={this.state.artists}
                 addArtist={this.addArtist}
        />
        <button onClick={this.generatePlaylist}>GENERATE</button>
        { this.state.tracks.length > 0 ? <Playlist uri={`https://embed.spotify.com/?uri=spotify:trackset:${name}:${tracks}`} size={{height: "720", width: "640"}} /> : null}
      </div>
    )
  }
}

export default Discovery;
