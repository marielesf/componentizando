import React, { Component } from "react";

import Header from "./components/Header";

import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import Main from "./components/Main";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main
          title="React Components"
          descricao="Os componentes são partes de código independentes e reutilizáveis. São
        funções JavaScript que funcionam isoladamente e retornam HTML. Os
        componentes vêm em dois tipos, componentes de classe e componentes de
        função."
        >
          <b>Qual a diferença entre o component: </b>
          <p>1 - function Footer(){}</p>
          <p>
            2 - const Footer = ({}) =&gt; {}
          </p>
          <div>
            Na opção 2 é possivel passar parametros, o que torna o componente
            mais versatil.
          </div>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
