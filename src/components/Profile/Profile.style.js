import styled from 'styled-components';

export const ProfileWrapper = styled.main`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  max-width: 50%;
  margin: 5rem auto;

  @media (max-width: 767px) {
    max-width: 100%;
    margin: 5rem 1rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  min-width: 50%;
  min-height: 20rem;
`;

export const PostImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin-left: 0.5rem;
  @media (min-width: 767px) {
    width: 12em;
    height: 12rem;
  }
`;
export const DisplayPost = styled.section`
  display: flex;
  flex-wrap: wrap;
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
