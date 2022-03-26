import React from 'react';

import s from './Feedback.module.css';

function Feedback({ options, onLeaveFeedback }) {
  return (
    <div className={s.Feedback}>
      <p className={s.text}>Please leave your feedback</p>
      {options.map(option => (
        <button
          className={s.button}
          key={option}
          name={option}
          type="button"
          onClick={(e) => {
            onLeaveFeedback(e.target.name);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Feedback;