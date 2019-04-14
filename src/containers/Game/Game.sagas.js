import { getQuestions } from '../../service/questions';
import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import { 
  fetchQuestionsFail, fetchQuestionsSuccess, FETCH_QUESTIONS, SUBMIT_ANSWERS,
} from './Game.ducks';

const getGameResults = state => state.game.results;
const getSettings = state => ({
  level: state.settings.level,
  numberOfQuestions: state.settings.numberOfQuestions,
});

function* fetchAllQuestions(){
  try{
    const {
      level, numberOfQuestions,
    } = yield select(getSettings);
    const questions = yield call(getQuestions, level, numberOfQuestions);

    yield put(fetchQuestionsSuccess(questions));
  } catch (error){
    yield put(fetchQuestionsFail(error));
  }
};

function* updatePersistedScores(){
  const { points } = yield select(getGameResults);
  const persistedData = yield localStorage.getItem('highscore');
  
  if(!persistedData || persistedData < points){
    yield localStorage.setItem('highscore', points);
  }
}

function* rootSaga(){
  yield all([
    takeLatest(SUBMIT_ANSWERS, updatePersistedScores),
    takeLatest(FETCH_QUESTIONS, fetchAllQuestions),
  ])
};

export default rootSaga;