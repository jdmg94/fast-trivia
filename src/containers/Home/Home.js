import React from 'react';
import Button from '../../components/Button';
import { Title } from '../../components/Text';
import Content from '../../components/Content';

const Home = ({ history }) => {
  const startGame = () =>  history.push('/game');

  return (
    <Content>
      <Title color="#0000005F">
        {'Welcome to Fast Trivia!'}
      </Title>
      <Button onClick={startGame}>
        {'Start Game'}
      </Button>
    </Content>
  );
};

export default Home;