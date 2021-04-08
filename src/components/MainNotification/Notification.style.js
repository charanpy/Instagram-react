import styled from 'styled-components';

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
`;

export const NotificationText = styled.p`
  margin-left: 2rem;
  font-size: 1.9rem;
`;
