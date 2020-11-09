import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  width: 100%;
  padding: 16px;
  color: #666360;

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