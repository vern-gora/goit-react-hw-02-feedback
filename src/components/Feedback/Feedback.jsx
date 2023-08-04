import React from 'react';
import css from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <section className={css.feedback}>
      {options.map((option, index) => {
        return (
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={index}
          >
            {option}
          </button>
        );
      })}
    </section>
  );
};

export default Feedback;
