import React from 'react';
import ContactForm from '../Components/ContactForm';
import styled from 'styled-components/macro';

const Contact = () => {
  return (
    <ContactStyled>
      <h5 className='text-center mt-5 text-white'>Vous souhaitez en savoir plus ? N'hésitez pas a me contacter via ce formulaire</h5>
      <ContactForm />
    </ContactStyled>
  );
};

const ContactStyled = styled.div `
  
`
export default Contact;