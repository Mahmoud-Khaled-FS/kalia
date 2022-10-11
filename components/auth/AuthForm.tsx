import { TextInput } from 'evergreen-ui';
import React, { PropsWithChildren } from 'react';
import classes from '../styles/auth.module.css';
import Btn from '../UI/Button';

type HeaderProps = {
  title: string;
  text: string;
};
type InputProps = {
  placeholder: string;
  type?: string;
  id: string;
  label: string;
};

type Form = React.FC<PropsWithChildren> & {
  Header: React.FC<HeaderProps>;
  Input: React.FC<InputProps>;
  Button: React.FC<PropsWithChildren>;
};

const AuthForm: Form = (props) => {
  return <form className={classes['form']}>{props.children}</form>;
};

AuthForm.Header = function Header(props) {
  return (
    <div className={classes['form-header']}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

AuthForm.Input = function Input(props) {
  return (
    <div className={classes['form-input']}>
      <label htmlFor={props.id}>{props.label}</label>
      <TextInput
        id={props.id}
        placeholder={props.placeholder}
        type={props.type ? props.type : 'text'}
        className={classes['input']}
      />
    </div>
  );
};

AuthForm.Button = function Button(props) {
  return <Btn>{props.children}</Btn>;
};
export default AuthForm;
