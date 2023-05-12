import React from 'react';
import styled from 'styled-components/macro'

const Home = () => {
  return (
    <HomeStyled>
      <div className="dynamicText puff-in-left container-fluid w-100 text-center">
        <h1>Fabien Cantin - Photographe</h1>
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.div `

  .dynamicText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
  
  h1 {
    color: white;
    font-family: 'Dancing Script', cursive;
    font-size: 3rem;
    animation:tracking-in-expand 1.5s cubic-bezier(.215,.61,.355,1.000) both
  }

  @keyframes tracking-in-expand{0%{letter-spacing:-.5em;opacity:0}40%{opacity:.6}100%{opacity:1}}
`
export default Home;