import React from "react";
import joel from "../img/JoelHiltonHeadshot.jpeg";

export const Home = () => {
  return (
    <div className="App-header">
      <h1>Welcome to My Awesome Website!</h1>
      <br></br>
      <img src={joel} alt="Joel" />
    </div>
  );
};
