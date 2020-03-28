import useSWR from 'swr';
import React, { useState } from 'react';
import Level from '../../components/Level';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import Text, { Title } from '../../components/Text';
import { getSettings, saveSettings }  from '../../service/settings'

const Settings = () => {
  const history = useHistory()
  const { data: settings, mutate } = useSWR('settings', getSettings, { suspense:true });
  const [buffer, set] = useState(settings);

  const setLevel = level => () => set(prevState => ({ ...prevState, level }));
  const addAmount = sum => () => set(prevState => ({ ...prevState, amount: prevState.amount + sum }));
  const goHome = () => history.push('/');
  const submitChanges = () => {
    saveSettings(buffer);
    mutate(buffer);
    history.goBack()
  };

  return (
      <>
        <Title>{'Game Settings'}</Title>
        <Text>{'Number of Questions:'}</Text>
        <Level nonResponsive width="30vw">
          <Button style={{ transform: 'scale(1.3)' }} onClick={addAmount(-1)}>-</Button>
          <Text>{buffer.amount}</Text>
          <Button style={{ transform: 'scale(1.3)' }} onClick={addAmount(1)}>+</Button>
        </Level>
        <Text>{'Difficulty Level:'}</Text>
        <Level width="30vw">
          <Button 
            onClick={setLevel('easy')}
            style={{ 
              color: '#FFF',
              backgroundColor: '#3A3',
              transform: `scale(${buffer.level === 'easy' ? '1.3' : '1'})` 
            }}
          >
            Easy
          </Button>
          <Button 
            onClick={setLevel('medium')}
            style={{ 
              color: '#FFF',
              backgroundColor: '#F90',
              transform: `scale(${buffer.level === 'medium' ? '1.3' : '1'})` 
            }}
          >
            Medium
          </Button>
          <Button 
            onClick={setLevel('hard')}
            style={{ 
              color: '#FFF',
              backgroundColor: '#D33',
              transform: `scale(${buffer.level === 'hard' ? '1.3' : '1'})` 
            }}
          >
            Hard
          </Button>
        </Level>        
        <Level nonResponsive width="60vw">
          <Button onClick={goHome}>Cancel</Button>
          <Button onClick={submitChanges}>Save</Button>
        </Level>
      </>
  );
};

export default Settings;
