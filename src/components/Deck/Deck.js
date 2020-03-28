import Card from '../Card';
import Layout from '../Layout';
import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import { useSprings, interpolate, animated } from 'react-spring';

const friction = 50;
const Wrapper = Layout.withComponent(animated.div)
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const getAnimation = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Deck = ({ questions, onSubmit }) => {
  const [answers] = useState([]);
  const [answered] = useState(() => new Set());
  const [animation, set] = useSprings(questions.length, i => ({
    to: to(i),
    from: from(i),
  }));

  const bind = useDrag(({
    args: [index], down, delta: [xDelta], direction: [xDir], velocity,
  }) => {
    const dir = xDir > 0 ? 1 : -1;
    const isFlicking = velocity > 0.2;
    if(!down && isFlicking) {
      const isRight = dir === 1;

      answered.add(index);
      answers[index] = isRight === true ? 'True' : 'False';
    }

    set(i => {
      if(i === index){
        const scale = down ? 1.1 : 1;
        const isAnswered = answered.has(index);
        
        if(isAnswered){
          const tension = down ? 800 : 200;
          const x = (200 + window.innerWidth) * dir;
          const rot = xDelta /100 + (dir * velocity * 10);
          
          return {
            x, 
            rot,
            scale,
            config: {
              tension,
              friction,
            }
          }
        } else {
          const rot = xDelta / 100;
          const x = down ? xDelta : 0;
          const tension = down ? 800 : 500;

          return {
            x, 
            rot,
            scale,
            config: {
              tension,
              friction,
            }
          }
        }
      }
    })

    // a cascade of conditions
    // that end up in the submission
    // of the results
    !down 
    && onSubmit
    && questions.length > 0 
    && answered.size === questions.length
    && onSubmit(answers);
  });

  return animation.map(({ x, y, rot, scale }, i) => (
    <Wrapper
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) 
      }}
    >
      <Card 
        {...bind(i)}
        data={questions[i]}
        style={{
          position: 'relative',
          transform: interpolate([rot, scale], getAnimation),
        }}
      />
    </Wrapper>
  ))
};

export default Deck;