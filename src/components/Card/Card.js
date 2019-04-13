import React from 'react'
import styled from 'styled-components';
import { animated } from 'react-spring';

const Base = styled(animated.div)`
  width: 45vh;
  height: 85vh;  
  max-width: 300px;
  max-height: 570px;
  border-radius: 10px;
  will-change: transform;
  background-color: white;
  background-size: auto 85%;
  background-repeat: no-repeat;
  background-position: center center;
  border: solid 2px ${props => props.color};
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
`;

const Content = styled.div`
  margin: 0; 
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  align-items: center;
  overflow-x: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

const borderColor = {
  hard: 'red',
  easy: 'green',
};

const Card = ({ data, ...props }) => {

  return (
    <Base {...props} color={borderColor[data.difficulty]}>
      <Content>
        <h2>{data.category}</h2>
        <p>{data.question}</p>
        <span>Difficulty: {data.difficulty}</span>
      </Content>
    </Base>
  );
};

export default Card;