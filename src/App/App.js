import React, { Component } from 'react';

import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Feedback from '../components/Feedback';
import Notification from '../components/Notification';

import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (previousValue, number) => previousValue + number,
      0,
    );

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return '0%';
    }
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    )}%`;
  };

  makeOptions = () => Object.keys(this.state);

  handleClickFeedback = e => {
    this.setState(previousValue => {
      return {
        [e.target.name]: (previousValue[e.target.name] += 1),
      };
    });
  };

  render() {
    return (
      <div className={s.container}>
        <Hero />
        <Feedback
          options={this.makeOptions()}
          onLeaveFeedback={this.handleClickFeedback}
        />
        {Object.values(this.state).some(number => number > 0) ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;
