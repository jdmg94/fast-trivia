import { connect } from 'react-redux';
import React, { useEffect, useCallback } from 'react'; 
import Deck from '../../components/Deck';
import { submitAnswers, fetchQuestions } from './Game.ducks';


const Wrapper = ({ questions, history, dispatch }) => {
  const onSubmit = useCallback(answers => {
    dispatch(submitAnswers(answers));

    history.push('/results');
  });

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return questions.length > 0 && (
    <Deck
      onSubmit={onSubmit}
      questions={questions} 
    />
  )
}

const mapStateToProps = state => ({
  questions: state.game.questions,
})
export default connect(mapStateToProps)(Wrapper);