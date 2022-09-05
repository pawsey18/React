import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>select a song</div>;
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <h3>Details for : </h3>
      <p>
        Title: {song.title} <br></br>
        Durration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
