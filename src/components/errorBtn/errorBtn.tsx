import style from './errorBtm.module.css';
import React from 'react';

class ErrorBtn extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={style.errorBtn_wrapper}>
        <button type="button">Error</button>
      </div>
    );
  }
}

export default ErrorBtn;
