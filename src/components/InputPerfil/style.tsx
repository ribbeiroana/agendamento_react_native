import styled from 'styled-components';

export const Texto = styled.label`
text-align: right;

h5{
  margin-right: 1rem;
}

svg {
  width: 40px;
  height: 20px;
  padding: 3px;
  background-color: var(--gray);
  color: var(--gren);
  border-radius: 15px 0 15px 0;
  box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);
-webkit-box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);
-moz-box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);
}
`
export const Label = styled.label`
padding: 7px;
text-align: center;
color: var(--gren);
`
export const Button = styled.div`
background-color: var(--gray);
color: var(--gren);
border-radius: 20px 0 20px 0;
padding: 1px;
width: 70px;
text-align: center;
margin: 4px 5px 4px 0;
cursor: pointer;
box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);
-webkit-box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);
-moz-box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);


svg {
  margin-left: 9px;
  }
`
export const Agendamentos = styled.div`
margin: 1rem;
justify-content: space-between;
display: flex;
background-color: var(--gray-ligth);
border-radius: 20px 0 20px 0;
box-shadow: 13px 15px 19px -13px rgba(77,71,71,0.95);
-webkit-box-shadow: 13px 15px 19px -13px rgba(77,71,71,0.95);
-moz-box-shadow: 13px 15px 19px -13px rgba(77,71,71,0.95);
`
