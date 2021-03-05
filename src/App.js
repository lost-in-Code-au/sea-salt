import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import parse from 'html-react-parser'
// import React, { useState } from 'react';

import { songs } from './data';

import Social from "./Views/components/Social.js";
import Home from "./Views/Home.js";
// import Login from "./Views/Login.js";
// import Dashboard from "./Views/Dashboard.js";
// import Song from "./Views/Song.js";


function App() {

  //firebase load
  // const [modules, setModules] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <iframe width="315" height="100" src="https://www.youtube.com/embed/M9ivtqbISQE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/songs">Songs</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/songs">
                <Songs />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

function Songs() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Shanties</h2>
      <ul>
        { songs.map(song => {
          return(
            <li key={song.id}>
              <Link to={`${url}/${song.name}`} >{song.name}</Link>
            </li>
          )})
        }
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a Shanty.</h3>
          <Social url={url} />
        </Route>
        <Route path={`${path}/:songId`}>
          <Topic testSongs={songs} />
        </Route>
      </Switch>
    </div>
  );
}

function Topic(props) {
  // The <Route> that rendered this component has a
  // path of `/Songs/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { songId } = useParams();
  let { path, url } = useRouteMatch();

  console.log('props + id ', props, songId)
  const song = props.testSongs.filter(function (song) {
    console.log('each song',song)
    return song.name === songId;
  })[0];
  console.log(song)

  return (
    <div>
      <h3>{song.name}</h3>
      <div>
        {parse(song.lyrics)}
      </div>
      <h4>{song.version}</h4>
      <Social url={url} />
    </div>
  );
}

export default App;
