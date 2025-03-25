import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: #fafafa;
  color: #333;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  margin: 0.5em;

  &:hover {
    background-color: #eee;
  }
`;

const Button = ({onClick, children})=>{
    return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
}

export default Button