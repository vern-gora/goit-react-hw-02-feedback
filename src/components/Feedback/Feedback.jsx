import React from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

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

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
