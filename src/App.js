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
      <div className="social-sharing">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://grubbyurchins-songs.web.app/ Shanties - The best way to sing together  " target="_blank" className="message__share__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
        </a>
        <a href="https://twitter.com/home?status=https://grubbyurchins-songs.web.app/ Shanties - The best way to sing together " target="_blank" className="message__share__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
        </a>
      </div>
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
    </div>
  );
}

export default App;
