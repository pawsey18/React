import { combineReducers } from "redux";

const songsResucer = () => {
  return [
    {
      title: "Back in black",
      duration: "3:44"
    },
    {
      title: "I want candy",
      duration: "1:03"
    },
    {
      title: "New York, New York",
      duration: "2:07"
    },
    {
      title: "Highway to your mothers",
      duration: "5:07"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsResucer,
  selectedSong: selectedSongReducer
});
