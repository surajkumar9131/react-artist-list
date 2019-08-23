import React, { Component } from "react";
import axios from "axios";
import Banner from "./banner";
import ArtistList from "./artist-list";

const ARTIST_URL = "http://localhost:3004/artists";

export default class Home extends Component {
  state = {
    artists: ""
  };

  componentDidMount() {
    axios.get(ARTIST_URL).then(response => {
      this.setState({ artists: response.data });
    });
  }

  render() {
    console.log("state", this.state.artists);
    return (
      <div>
        <Banner />
        <ArtistList allArtists={this.state.artists} />
      </div>
    );
  }
}
