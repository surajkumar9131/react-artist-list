import React, { Component } from "react";
import axios from "axios";
import AlbumList from "./albumList";

const ARTIST_URL = "http://localhost:3004/artists";

export default class Home extends Component {
  state = {
    artist: ""
  };

  componentDidMount() {
    axios.get(`${ARTIST_URL}/${this.props.match.params.id}`).then(response => {
      this.setState({ artist: response.data });
    });
  }

  render() {
    const artist = this.state.artist;
    return (
      <>
        <div className="artist_bio">
          <div className="avatar">
            <span
              style={{
                background: `url('/images/covers/${
                  artist.cover
                }.jpg') no-repeat`
              }}
            />
          </div>
          <div className="bio">
            <h3>{artist.name}</h3>
            <div className="bio_text">{artist.bio}</div>
          </div>
          <AlbumList albumList={artist.albums} />
        </div>
      </>
    );
  }
}
