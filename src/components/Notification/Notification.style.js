import styled from 'styled-components';

const Notification = styled.p`
  font-size: 1.2rem;
  /* font-family: cursive; */
  font-weight: 400;
  color: ${(props) => props.theme.iconActive};
  font-family: inherit;
  /* margin-bottom: 1.5rem; */
`;

export default Notification;
