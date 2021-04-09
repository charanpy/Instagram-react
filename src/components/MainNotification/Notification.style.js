import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigateUser = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: inherit;
`;

export const ShowNotif = styled.i`
  font-size: 2.3rem;
  margin-right: 2.8rem;
  cursor: pointer;
  color: ${(props) => (props.hasNotification ? '#f2003c' : props.theme.icon)};
`;

export const Container = styled.section`
  margin-top: 5rem;
  overflow-y: scroll;
`;

export const NotificationContainer = styled.div`
  display: flex;
  margin-bottom: 1.3rem;
  cursor: pointer;
  align-items: center;
`;

export const NotificationText = styled.p`
  margin-left: 2rem;
  font-size: 1.9rem;
`;

export const Post = styled.img`
  margin-left: 2rem;
  height: 4rem;
`;

export const Time = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.textLight};
  margin-left: 1rem;
`;
