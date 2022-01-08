import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const flex = css`
  display: flex;
  flex-direction: column;
`;
export const PostsContainer = styled.div`
  ${flex};
  width: 100%;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.p`
  font-size: 2rem;
`;

export const SinglePost = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  width: 50%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Header = styled.h1`
  font-size: 2.8rem;
  font-weight: 100;
  text-align: center;
`;

export const PostContainer = styled.div`
  ${flex};
  margin-top: 2rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Navigate = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  width: fit-content;
`;

export const Name = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: capitalize;
  margin-left: ${(props) => (props.caption ? '0rem' : '1rem')};
`;

export const Caption = styled.p`
  font-size: 1.6rem;
  font-weight: 100;
  margin-left: 1.3rem;
`;

export const Post = styled.img`
  height: 40%;
  min-width: 30rem;
  max-width: 30rem;
  margin-bottom: 1rem;
`;

export const Like = styled.p`
  font-size: 1.5rem;
  font-weight: 100;
  margin-top: 1rem;
`;

export const CaptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const Date = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.textLight};
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background: transparent;
  text-align: initial;
`;

export const NoPost = styled.h1`
  text-align: center;
  margin: 5rem 0;
  font-size: 2rem;
`;
