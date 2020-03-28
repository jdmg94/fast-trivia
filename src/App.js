import Home from './containers/Home';
import Game from './containers/Game';
import React, { Suspense } from 'react';
import Text from './components/Text';
import Results from './containers/Results';
import Settings from './containers/Settings';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense
        fallback={<Text>loading...</Text>}
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
