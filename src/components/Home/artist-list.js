import React from "react";
import { Link } from "react-router-dom";

const ArtistsList = props => {
  const list = ({ allArtists }) =>
    allArtists
      ? allArtists.map(artist => (
          <Link
            key={artist.id}
            to={`/artist/${artist.id}`}
            className="artist_item"
            style={{
              background: `url('/images/covers/${artist.cover}.jpg') no-repeat`
            }}
          >
            <div>{artist.name}</div>
          </Link>
        ))
      : null;

  return (
    <div className="artists_list">
      <h4>Browse the artists</h4>
      <div className="artist_container">{list(props)}</div>
    </div>
  );
};

export default ArtistsList;
