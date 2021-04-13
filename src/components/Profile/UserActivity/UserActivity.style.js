import styled from 'styled-components';

export const ActivityContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1.8rem;
  @media (max-width: 750px) {
    width: 90%;
  }
`;
export const UserActivityWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Count = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  align-self: center;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  text-transform: capitalize;
`;
