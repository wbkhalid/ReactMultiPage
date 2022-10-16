import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
 }
html {
  font-size: 90%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 2rem;
  font-weight: 700;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }
  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}
p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight:400;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 9rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}


`