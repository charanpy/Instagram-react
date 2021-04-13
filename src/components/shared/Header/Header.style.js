import styled from 'styled-components';
import { sharedBorderHeader as sharedBorder } from '../../../helpers/CommonStyles';

/* eslint-disable */
export const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${sharedBorder};
`;

export const Name = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;
export const Button = styled.button`
  outline: none;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
`;

export const IconContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Notify = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  color: white;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: 10px;
  background: #e95950;
`;
