import styled from 'styled-components';
import { sharedBorder } from '../../helpers/CommonStyles';

const MessageWrapper = styled.section`
  height: 80vh;
  margin-top: 3rem;
  width: 50vw;
  margin-bottom: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${sharedBorder};

  @media (max-width: 750px) {
    width: auto;
  }
`;

export default MessageWrapper;
