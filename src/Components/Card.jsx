import React from 'react';
import styled from 'styled-components'

const Card = ({images}) => {

  return (
    <CardStyled className='mt-5 container d-flex justify-content-center'>
      <div class="card mb-5">
        <img src={images.image} class="img-thumbnail" alt={"image de " + images.name} />
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div `
    
    img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      object-position: center;
    }
`

export default Card;