import React from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <>
      <h3 className={css.message}>{message}</h3>
    </>
  );
};

export default Notification;
