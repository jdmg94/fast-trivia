import Level from '../../components/Level';
import { connect } from 'react-redux';
import { actionCreators } from '../Game';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Content from '../../components/Content';
import React, { useEffect, useState } from 'react';
import { Title, Label } from '../../components/Text';

const { resetGame } = actionCreators;
const Results = ({ results, history, dispatch }) => {
  const [highscore, setHighscore] = useState(results.points);

  useEffect(() => {
    const value = localStorage.getItem('highscore');
    if(value > highscore){
      setHighscore(value);
    }
  }, []);

  const restartGame = () => {
    dispatch(resetGame());
    history.push('/game');
  };

  const goHome = () => {
    dispatch(resetGame());
    history.push('/');
  };
  
  return (
    <Layout>
      <Content>
        <Title color="#0000005F">
          {'Game Results'}
        </Title>
        {
          results.points === highscore && (
            <Title>New Record!</Title>
          )
        }
        <span>
          <Label>Highscore: </Label>
          {highscore}
        </span>
        <span>
          <Label>Correct Answers: </Label>
          {results.points}
        </span>
        <Level 
          style={{ 
            width: '60vh' 
          }}
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
      </Content>
    </Layout>
  )
};

const mapStateToProps = state => ({
  results: state.game.results,
});
export default connect(mapStateToProps)(Results)