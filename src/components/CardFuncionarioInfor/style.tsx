import styled from 'styled-components';

export const Container = styled.div`
color: var(--secondary);
background-color:var(--primary);
width: 100%;
height: 100%;
border-radius: 50px 0 0 0;

button {
  background-color: var(--secondary);
  color: var(--gren);
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 10px;
  margin: 2px;
  border-radius: 20px 0 20px 0;
  cursor: pointer;
  box-shadow: 13px 15px 19px -16px rgba(77,71,71,0.75);
-webkit-box-shadow: 13px 15px 19px -16px rgba(77,71,71,0.75);
-moz-box-shadow: 13px 15px 19px -16px rgba(77,71,71,0.75);
}

button:hover {
 background-color: var(--gray-ligth);
 color: var(--gren);
}
`
export const Header = styled.div`
text-align: center;
`

export const Img = styled.div`
img{
  max-width: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
`

export const Buttons = styled.div`
margin-top: 2rem;
h3 {
  margin-left: 1rem;
  margin-bottom: 1rem;
}
`
export const ButtonServicos = styled.div`
margin: 1rem 1rem 0 1rem;
justify-content: space-between;
display: flex;
span {
 font-weight:bold;
}
button {
margin-left: 1rem;
background-color: var(--gray);
box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);
-webkit-box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);
-moz-box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);
}
`

export const ButtonHorarios = styled.div`
margin: 35px 10px 0 10px;    
background-color: var(--gray);
padding: 8px;
border-radius: 50px 0 50px 0;
text-align: center;
box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);
-webkit-box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);
-moz-box-shadow: 10px 10px 11px -6px rgba(77,71,71,1);

h4 {  
  text-align: center;
  margin-bottom: 10px;
}

`


