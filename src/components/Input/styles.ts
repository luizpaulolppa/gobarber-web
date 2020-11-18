import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: #232129;
  border-radius: 10px;
  width: 100%;
  padding: 16px;
  border: 2px solid #232129;
  color: #666360;

  ${props => props.isErrored && css`
    border-color: #c53030;
  `
  }
  ${props => props.isFocused && css`
      color: #ff9090;
      border-color: #ff9090;
    `
  }
  ${props => props.isFilled && css`
    color: #ff9090;
  `
  }

  input {
    flex: 1;
    color: #F4EDE8;
    border: 0;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
