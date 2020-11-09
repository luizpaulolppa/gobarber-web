import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  button {
    background: #FF9000;
    height: 56px;
    border-radius: 10px;
    border: 0;
    width: 100%;
    padding: 0 16px;
    color: #312E38;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2;

    &:hover {
      background: ${shade(0.2, '#FF9000')}
    }
  }
`;
