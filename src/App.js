import React from 'react';
import store from './store';
import Home from './containers/Home';
import Game from './containers/Game';
import { Provider } from 'react-redux';
import Results from './containers/Results';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  body {
    margin: 0;
    padding: 0;
    width: 100%;  
    height: 100%;
    position: fixed;
    overflow: hidden;
    user-select: none;
    overscroll-behavior-y: contain;
  }

  html * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
  }

  #root {
    background: lightblue;
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/game" component={Game} />
          <Route exact path="/results" component={Results} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
