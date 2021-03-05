// pages/Home.js

import React from "react";
import Social from "./components/Social.js";
import MegaDraft from "./components/MegaDraft.js";

const Home = () => (
  <div>
    <h1 className="title is-1">This is the Home Page</h1>
    <p>
      Welcome and enjoy :) Zzzzz
      <MegaDraft />
    </p>
    <Social url={false} />
  </div>
);

export default Home;