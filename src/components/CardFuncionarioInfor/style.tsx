import styled from 'styled-components';


export const Container = styled.div `
background-color: var(--primary);
margin-top: 1rem;
color: var(--secondary);

button {
  background-color: var(--secondary);
  color: var(--gren);
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 10px;
  margin: 2px;
  font-weight:bold;
  cursor: pointer;
}

button:hover {
 background-color: var(--gray);
 color: var(--gren);

}

svg {
  cursor: pointer;
}

p {
  text-align: center;
  margin-left: 5px;
  margin-top: 10px;
}
`

export const Buttons = styled.div `
margin-top: 5rem;
`

export const ButtonServicos = styled.div `
margin: 1rem 1rem 0 1rem;
justify-content: space-between;
display: flex;

span {
 font-weight:bold;
}
`

export const ButtonHorarios = styled.div `
margin-top: 3rem;
`


