import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
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
