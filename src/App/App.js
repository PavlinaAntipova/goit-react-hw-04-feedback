import React, { useState, useReducer } from 'react';

import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Feedback from '../components/Feedback';
import Notification from '../components/Notification';

import s from './App.module.css';


function reducerCounter(state, action) {

  switch (action.type) {
    case "good":
      return {...state, good: state.good + action.payload}
    case "neutral":
      return {...state, neutral: state.neutral + action.payload}
    case "bad":
      return {...state, bad: state.bad + action.payload}
    default:
      return state;
  }
  
}

export default function App() {
  const [state, dispatch] = useReducer(reducerCounter, { good: 0, neutral: 0, bad: 0 });
  
   const makeOptions = () => Object.keys(state);

  const countTotalFeedback = () => Object.values(state).reduce(
       (previousValue, number) => previousValue + number,
       0,
     );

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) {
      return '0%';
    }

    return `${Math.round(
      (state.good / countTotalFeedback()) * 100,
    )}%`;
  }; 
  
  const handleClickFeedback = name => {
    dispatch({ type: name, payload: 1 });
  }

    return (<div className={s.container}>
        <Hero />
        <Feedback
          options={makeOptions()}
          onLeaveFeedback={handleClickFeedback}
        />
        {Object.values(state).some(number => number > 0) ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>)
}
