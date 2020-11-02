import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import ShowDetails from './views/showDetails';
import EpisodeDetails from './views/episodeDetails';

const RootComponent = () => {
  return (
    <Router>
        <Switch>
          <Route path="/shows/:id/:name">
            <ShowDetails />
          </Route>
          <Route path="/episodes/:episodeId/:showName">
            <EpisodeDetails />
          </Route>
          <Route exact path="/">
            <Redirect to="/shows/6771/the-powerpuff-girls" />
          </Route>  
        </Switch>
    </Router>
  );
}

export default RootComponent;