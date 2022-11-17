import React from "react";
import hedgehog from "./resources/hedgehog.jpg"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Welcome Rickcues App</h1>
      <h2>Let's build something.</h2>
      <img src={hedgehog} alt="it's always sunny in this hedgehog"></img>
    </div>
  );
};

export default Home;


