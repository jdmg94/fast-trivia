import React from 'react';
import Level from '../../components/Level';
import Button from '../../components/Button';
import { Title } from '../../components/Text';

const strings = {
  welcome: 'Welcome to Fast Trivia!',
  start: 'Start Game',
  settings: 'Settings'
}

const Home = ({ history }) => {
  const startGame = () =>  history.push('/game');
  const goToSettings = () => history.push('/settings');

  return (
    <>
      <Title color="#0000005F">
        {strings.welcome}
      </Title>
      <Level width="60vw">
        <Button onClick={startGame}>
          {strings.start}
        </Button>
        <Button onClick={goToSettings}>
          {strings.settings}
        </Button>  
      </Level>
    </>
  );
};

export default Home;