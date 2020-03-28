import { decode } from 'he';
import { getSettings } from './settings';
import { toQueryParams } from '../utils/helpers';

export const getQuestions = async (difficulty = 'medium', amount = 10, type = 'boolean') => {
  const baseUrl = 'https://opentdb.com/api.php';
  const search = toQueryParams({
    type,
    amount,
    difficulty,
  });

  const response = await fetch(`${baseUrl}${search}`);
  const { results } = await response.json();
   
  return results.map(({ question, ...item }) => ({
    ...item,
    question: decode(question),
  }))
};

export const calculateScore = async (questions, answers) => {
  let points = 0;

  const { level, amount } = await getSettings();
  const persistedData = await localStorage.getItem(`highscore-${level}-${amount}`) ?? 0;
  const hits = answers.map((answer, index) => {
    const question = questions[index];

    if(answer === question.correct_answer) points++;

    return ({
      ...question,
      answer,
    });        
  });

  if(persistedData < points){
    await localStorage.setItem(`highscore-${level}-${amount}`, points);
  }

  return {
    hits,
    points,
  }
}