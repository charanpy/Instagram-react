import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  margin: 0;
  outline: none;
  border: ${(props) =>
    props.theme.mode
      ? '.3px solid rgba(255,255,255,0.5)'
      : '.3px solid #212529'};
  padding: 5px;
  text-align: center;
  margin-left: 2rem;
  width: 10rem;
  background-color: ${(props) => (!props.bgcolor ? '#0275d8' : 'inherit')};
  color: inherit;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1.8rem;
  text-transform: uppercase;
`;

export default Button;
