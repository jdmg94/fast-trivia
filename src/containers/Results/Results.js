import useSWR from 'swr';
import React from 'react';
import Level from '../../components/Level';
import Button from '../../components/Button';
import Text, { Title } from '../../components/Text';
import { useHistory, useLocation } from 'react-router-dom';

const Results = () => {
  const history = useHistory()
  const { state: { results: { points }, settings: { amount, level } } } = useLocation()
  const { data: highscore } = useSWR(`highscore-${level}-${amount}`, key => localStorage.getItem(key), { suspense: true })

  const goHome = () => history.push('/');
  const restartGame = () => history.push('/game');
  
  return (
      <>
        <Title color="#0000005F">
          {'Game Results'}
        </Title>
        {
          points === highscore && (
            <Title>New Record!</Title>
          )
        }
        <span>
          <Text>Highscore: </Text>
          {highscore}
        </span>
        <span>
          <Text>Correct Answers: </Text>
          {points}
        </span>
        <Level 
          nonResponsive
          width="60vh"
        >
          <Button 
            onClick={restartGame}
          >
            Play Again
          </Button>
          <Button 
            onClick={goHome}
          >
            Go Home
          </Button>
        </Level>
      </>
  )
};

export default Results;
