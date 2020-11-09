import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = ButtonHTMLAttributes<HTMLButtonElement>;
// interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Input: React.FC<InputProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Input;
