import React from 'react';
import ContactForm from '../Components/ContactForm';
import styled from 'styled-components/macro';

const Contact = () => {
  return (
    <ContactStyled>
      <div className="container row m-auto">
        <div className="col-md-6">
          <h1 className='text-center mt-5 text-white title'>Contactez-moi</h1>
          <p> Je vous laisse remplir le formulaire pour me contacter.  </p>
          <p> Plus vous serez précis sur votre demande, plus vite je pourrai vous répondre.</p>
          <p> A très vite !</p>
        </div>
        <div className="col-md-6">
          <ContactForm />
        </div>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled.div `
  .title {
    font-family: 'Dancing Script', cursive;
    margin-bottom: 20px;
  }

  p {
    color: white;
    text-align: center;
  }
`
export default Contact;