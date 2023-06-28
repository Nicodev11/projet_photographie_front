import React from 'react';
import styled from 'styled-components/macro'

const Card = ({image}) => {
  
  console.log(image);

  return (
    <CardStyled className='my-5 container d-flex justify-content-center'>
      <img src={"./img/" + image.category + "/" + image.picture} className='img-thumbnail' alt={image.category} />
    </CardStyled>
  );
};

const CardStyled = styled.div `
    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      object-position: center;
    }
`

export default Card;