import useSWR from 'swr';
import Deck from '../../components/Deck';
import React, { useCallback } from 'react'; 
import Level from '../../components/Level';
import { Title } from '../../components/Text';
import { useHistory } from 'react-router-dom';
import { getSettings } from '../../service/settings';
import { getQuestions, calculateScore } from '../../service/questions';

const settingsToKeys = ({ level, amount }) => [level, amount]

const Game = () => {
  const history = useHistory()
  const { data: settings } = useSWR('settings', getSettings, { suspense:true })
  const { data: questions = [] } = useSWR(settingsToKeys(settings), getQuestions, { suspense: true, revalidateOnFocus: process.env.NODE_ENV !== 'development' })

  const onSubmit = useCallback(async answers => {
    const results = await calculateScore(questions, answers)

    history.push({ pathname: '/results', state: {
      results,
      settings,
    } })
  }, [questions, history, settings])

  return (
    <Level nonResponsive>
      <Title color="#0000005F">False</Title>
      <Deck
        onSubmit={onSubmit}
        questions={questions} 
      />
      <Title color="#0000005F">True</Title>
    </Level>
  )
}

export default Game;
