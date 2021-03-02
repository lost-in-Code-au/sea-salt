import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import React, { useState } from 'react';

import { songs } from './data';

import Home from "./Views/Home.js";
import Login from "./Views/Login.js";
import Dashboard from "./Views/Dashboard.js";
import Song from "./Views/Song.js";


function App() {

  //firebase load
  // const [modules, setModules] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
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
  const testSongs = [
      {name:'Kickass',
        lyrics:"Blue Murder sing Bully in the Alley Take in yer lines and make her fast\ boys/ Drop in the pawls, we've heaved enough now",
        artist:'Reece Jones'},
      {name:'kity kity',lyrics:'blah blah blahblah blah blahblah blah blahblah blah blahblah blah blah',artist:'Reece Jones'},
      {name:'boom boom',lyrics:'blah blah blahblah blah blah',artist:'Reece Jones'},
      {name:'power!',lyrics:'mwhahahshs blah blah',artist:'Reece Jones'},
      {name:'lets do this!',lyrics:'killer killer chicken dinner blah blah',artist:'Reece Jones'},
    ]

      // simply do so by passing it through the component prop.


  return (
    <div>
      <h2>Songs</h2>
      <ul>
        { testSongs.map(song => {
          return(
            <li key={song.name}>
              <Link to={`${url}/${song.name}`} >{song.name}</Link>
            </li>
          )})
        }

        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a Song.</h3>
        </Route>
        <Route path={`${path}/:songId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/Songs/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { songId } = useParams();

  return (
    <div>
      <h3>{songId}</h3>
    </div>
  );
}

export default App;
