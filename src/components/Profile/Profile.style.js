import styled from 'styled-components';

export const ProfileWrapper = styled.main`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  min-width: 50%;
  min-height: 20rem;
`;

export const UserDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  @media (max-width: 750px) {
    margin-left: 1rem;
  }
`;

export const UsernameWrap = styled.div`
  display: flex;
`;
export const Username = styled.p`
  font-size: 3rem;
  font-weight: 100;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
