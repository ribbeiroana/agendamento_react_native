import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #008584;
  --secondary: #f5f5f5;
  --gren: #006666;
  --gray: #cccccc;
  --gray-ligth: #e9e9e9;
}

body {
  background-color: var(--primary);
  color: var(--secondary);
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Dosis", sans-serif;
}

ul, nav {
  list-style-type: none;
}

a {
  text-decoration: none;
}
`