import { styled } from 'styled-components';

export const Button = styled.button`
  padding: 15px clamp(10px, 2vw, 25px);
  border: solid 1px #fff;
  transition: 0.4s ease-in-out;
  border-radius: 15px;
  font-weight: bold;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
