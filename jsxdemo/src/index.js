// import the react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom";

// createa react component
const App = () => {
  // returning jsx
  //   function time() {
  //     return new Date().toLocaleDateString();
  //   }
  return (
    <div>
      <label className="label">enter name:</label>
      <input id="name" type="text" />
      <button
        style={{ color: "#fff", backgroundColor: "red", padding: "2px" }}
      >hello</button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
