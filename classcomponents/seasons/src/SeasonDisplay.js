import React from "react";

const SeasonDisplay = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
  );
  return <div>SeasonDisplay</div>;
};

export default SeasonDisplay;
