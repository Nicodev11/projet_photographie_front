import React from 'react';
import styled from 'styled-components/macro';

const NotFound = () => {
  return (
    <NotFoundStyled>
      <div className="container row m-auto">
        <div className="col-md-6 img leftPart">
          <img src="./img/erreur404.png" className='m-2' alt="erreur" />
        </div>
        <div className="col-md-6 text rightPart text-center text-white">
          <h1 className='my-3'>Erreur 404</h1>
          <h3 className='my-3'>Il semblerait que cette page n'éxiste pas !</h3>
          <h5 className='my-3'>Pas de panique, tu as juste a cliquer sur le bouton ci-dessous</h5>
          <a href='/' className="btn btn-danger w-50 mx-auto mt-3">Retour à la page d'accueil</a>
        </div>
      </div>
    </NotFoundStyled>
  );
};

const NotFoundStyled = styled.div `
  .rightPart {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3, h5 {
      font-family: 'Dancing Script', cursive;
      font-size: 1.8rem;
    }
  }

  img {
    width: 90%;
  }
`

export default NotFound;