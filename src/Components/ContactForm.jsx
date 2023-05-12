import { ValidationError, useForm } from "@formspree/react";
import React from "react";
import styled from "styled-components/macro";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("meqwdgzd");
  if (state.succeeded) {
    return <p className=" fw-bold text-success text-center fs-3 mt-5">formulaire envoyé avec succés</p>;
  }

  return (
    <ContactFormStyled className="container col-md-6">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label">Adresse email</label>
        <input id="email" className="form-control w-75" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className="form-label mt-3">Votre message</label>
        <textarea id="message" rows="8" cols="40" name="message" className="form-control" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="btn btn-success mt-3" type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
    </ContactFormStyled>
  );
};

const ContactFormStyled = styled.div`
  color: white;
  margin: 50px auto;
  border: 1px solid white;
  border-radius: 20px;
  background-color: #0000009a;
  -webkit-box-shadow: -1px 0px 15px 0px #000000;
  box-shadow: -1px 0px 15px 0px #000000;
  padding: 15px;
  
  textarea {
  resize: none;
  }

  
`;

export default ContactForm;
