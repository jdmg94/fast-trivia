import React from 'react';
import Level from '../../components/Level';
import Button from '../../components/Button';
import { Title } from '../../components/Text';
import Content from '../../components/Content';

const Home = ({ history }) => {
  const startGame = () =>  history.push('/game');
  const goToSettings = () => history.push('/settings');

  return (
    <Content>
      <Title color="#0000005F">
        {'Welcome to Fast Trivia!'}
      </Title>
      <Level width="60vw">
        <Button onClick={startGame}>
          {'Start Game'}
        </Button>
        <Button onClick={goToSettings}>
          {'Settings'}
        </Button>  
      </Level>
    </Content>
  );
};

export default Home;