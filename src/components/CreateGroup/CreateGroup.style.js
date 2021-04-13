import styled from 'styled-components';
import { sharedBorder } from '../../helpers/CommonStyles';

/* eslint-disable */
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 100%;
  ${sharedBorder};
  @media (max-width: 750px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const SendMessage = styled.p`
  font-size: 1.9rem;
`;
