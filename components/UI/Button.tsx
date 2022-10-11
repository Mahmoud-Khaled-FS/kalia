import React from 'react';
import { Button as Btn, ButtonOwnProps, BoxComponent } from 'evergreen-ui';

const Button: BoxComponent<ButtonOwnProps, 'button'> = (props) => {
  return (
    <Btn {...props} width="100%" paddingY="23px" fontSize="18px" color="#fff" backgroundColor="#000" className="btn">
      {props.children}
    </Btn>
  );
};

export default Button;
