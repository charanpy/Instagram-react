import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  border: none;
  background: ${(props) =>
    props.danger ? '#d9534f' : 'rgba(66, 133, 244, 1)'};
  color: white;
  text-align: center;
  width: ${(props) => props.width}rem;
  outline: none;
  transition: all 500ms ease-in-out;
  margin-top: 1.24rem;
  font-weight: 400;
  font-size: 1.6rem;
  border-radius: 4px;
  font-family: inherit;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  font-weight: 600;

  &:hover {
    background: rgba(66, 133, 244, 0.6);
  }
`;

export default Button;
