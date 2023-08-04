import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ onGood, onNeutral, onBad, onTotal, onPositive }) => {
  return (
    <>
      <p className={css.p}>
        good: <span>{onGood}</span>
      </p>
      <p className={css.p}>
        neutral: <span>{onNeutral}</span>
      </p>
      <p className={css.p}>
        bad: <span>{onBad}</span>
      </p>
      <p className={css.p}>
        total: <span>{onTotal}</span>
      </p>
      <p className={css.p}>
        positive feedback:{' '}
        <span>
          <b>{onPositive}%</b>
        </span>
      </p>
    </>
  );
};

export default Statistics;
