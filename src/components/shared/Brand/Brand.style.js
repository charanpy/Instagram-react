import styled from 'styled-components';

const Brand = styled.h1`
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 400;
  font-size: 3rem;
  color: ${(props) => props.theme.text};
  @media (max-width: 720px) {
    font-family: 'Open Sans Condensed';
    font-size: 2.7rem;
  }
`;

export default Brand;
