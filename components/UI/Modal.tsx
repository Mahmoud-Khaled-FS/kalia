import React from 'react';
import classes from '../styles/model.module.css';
import { CrossIcon } from 'evergreen-ui';

type Props = {
  onCancel: () => void;
};

const Modal: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={'close-overlay'} onClick={props.onCancel}></div>
      <div className={classes.container}>
        <button onClick={props.onCancel} className={classes['button-close']}>
          <CrossIcon color="#fff" size={20} />
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
