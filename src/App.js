import Home from './containers/Home';
import Game from './containers/Game';
import React, { Suspense } from 'react';
import Loader from './components/Loader';
import Results from './containers/Results';
import Settings from './containers/Settings';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter basename="/fast-trivia">
    <ErrorBoundary>
      <Suspense
        fallback={<Loader />}
      >
        <Switch>
          <Route exact path="/game" component={Game} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/settings" component={Settings} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
