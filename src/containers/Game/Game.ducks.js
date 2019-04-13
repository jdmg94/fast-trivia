const RESET_GAME = 'GAME/RESET_GAME';
const SUBMIT_ANSWERS = 'game/SUBMIT_ANSWERS';
const FETCH_QUESTIONS = 'game/FETCH_QUESTIONS';
const FETCH_QUESTIONS_FAIL = 'game/FETCH_QUESTIONS_FAIL';
const FETCH_QUESTIONS_SUCCESS = 'game/FETCH_QUESTIONS_SUCCESS';

const initialState = {
  results: {
    points: 0,
    hits: [],
  },
  questions: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch(type){
    case FETCH_QUESTIONS_SUCCESS: {
      const { questions } = payload;
      const { results } = initialState;

      return {
        ...state,
        results,
        questions,
      }
    }

    case SUBMIT_ANSWERS: {
      let points = 0;
      const { answers } = payload;
      const { questions } = state;

      const hits = answers.map((answer, index) => {
        const question = questions[index];

        if(answer === question.correct_answer) points++;

        return ({
          ...question,
          answer,
        });        
      });

      return {
        ...state,
        results: {
          hits,
          points,
        },
      }
    }

    case RESET_GAME: return initialState;
    default: return state;
  }
};

const resetGame = () => ({
  type: RESET_GAME,
})

const submitAnswers = answers => ({
  type: SUBMIT_ANSWERS,
  payload: { answers },
});

const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
});

const fetchQuestionsFail = error => ({
  payload: { error },
  type: FETCH_QUESTIONS_FAIL,
});

const fetchQuestionsSuccess = questions => ({
  payload: { questions },
  type: FETCH_QUESTIONS_SUCCESS,
});

export default reducer;
export {
  RESET_GAME,
  SUBMIT_ANSWERS,
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_FAIL,
  FETCH_QUESTIONS_SUCCESS,
  resetGame,
  submitAnswers,
  fetchQuestions,
  fetchQuestionsFail,
  fetchQuestionsSuccess,
}
