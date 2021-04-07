/* eslint-disable */
import styled from 'styled-components';
import { sharedBorder } from '../../helpers/CommonStyles';

export const HeaderContainer = styled.header`
  padding: 1rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  ${sharedBorder};
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background: transparent;
`;

export const Menu = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const User = styled.p`
  font-size: 2.3rem;
  text-transform: capitalize;
`;
