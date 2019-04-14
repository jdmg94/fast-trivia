import { decode } from 'he';
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