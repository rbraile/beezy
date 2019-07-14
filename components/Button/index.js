import React from 'react';

import {
  ButtonStyle,
} from './styled';

const Button = (props) => {
  const {
    width,
    padding,
    text,
    href,
    children,
    onClick
  } = props;

  return (
    <ButtonStyle
      width={width}
      padding={padding}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button;
