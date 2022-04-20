import React from "react";
import sunny from "./resources/sunny.gif"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Welcome Rickcues App</h1>
      <h2>Let's build something.</h2>
      <img src={sunny} alt="it's always sunny dancing"></img>
    </div>
  );
};

export default Home;


