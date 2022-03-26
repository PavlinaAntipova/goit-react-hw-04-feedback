import React from 'react';

import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={s.Statistics}>
      <p className={makeClasses(s.estimate, s.option)}>
        good <span className={s.number}>{good}</span>
      </p>
      <p className={makeClasses(s.estimate, s.option)}>
        neutral <span className={s.number}>{neutral}</span>
      </p>
      <p className={makeClasses(s.estimate, s.option)}>
        bad <span className={s.number}>{bad}</span>
      </p>
      <p className={makeClasses(s.estimate, s.option)}>
        total <span className={s.number}>{total}</span>
      </p>
      <p className={makeClasses(s.estimate, s.percentage)}>
        {positivePercentage}
      </p>
    </div>
  );
}

function makeClasses(...arg) {
  return arg.join(' ');
}

export default Statistics;