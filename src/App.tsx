import React from 'react';
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import About from './components/about/about';
import Skill from './components/skill/skill';
import Project from './components/projects/projects';
import Contact from './components/contact/contact';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding:0;
  border:0;
  outline:0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;

}
:root{
  --color-bg:#2b2b3a;
  --color-bg-variant:#254558;
  --color-primary:#1ed2f4;
  --color-primary-variant:#328284;
  --color-white: #fff;
  --color-light: #909095;
  --color-active: #254558;
  --transition: all 400ms ease;
  --container-width-lg: 75%;
  --container-width-md: 86%;
  --container-width-sm: 90%;  
}

html{
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  display:none;
}
body{
  font-family: 'Poppins', sans-serif;
  background-color: var(--color-bg);
  color: var(--color-white);
  line-height: 1.7;   
}
.container{
  width: var(--container-width-lg);
  margin: 0 auto;
}
h1,h2,h3,h4,h5{
  font-weight: 500;
}
h1{
  font-size: 3rem;
}
section{
  margin-top: 8rem;
  height: 100vh;
}
section > h2{
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 3rem;
}
.text-light{
  color: var(--color-light);
}
a{
  color: var(--color-primary);
  transition: var(--transition);
}
a:hover{
  color: var(--color-white);
  transition: 0.5s;

}
.btn{
  width: max-content;
  display: inline-block;
  color: var(--color-primary);
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid var(--color-primary);
  transition:  var(--transtion);
}
.btn:hover{
  background: var(--color-white);
  color: var(--color-bg);
  border-color: transparent;
}
.btn-primary{
  background: var(--color-primary);
  color: var(--color-bg);
}
img{
  display: block;
  width: 100%;
  object-fit: cover;
}
@media screen and (max-width: 1024px){
  .container{
    width: var(--container-width-md);
  }
  section > h2{
    margin-bottom: 6rem;
  }
}
@media screen and (max-width: 600px){
  .container{
    width: var(--container-width-sm);
  }
  section > h2{
    margin-bottom: 2rem;
  }
}
`;
function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <NavBar /> 
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
