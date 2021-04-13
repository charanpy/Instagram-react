import styled from 'styled-components';
import { sharedBorder } from '../../helpers/CommonStyles';

const GroupContainer = styled.section`
  height: 100%;
  width: 30%;
  ${sharedBorder};
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export default GroupContainer;
