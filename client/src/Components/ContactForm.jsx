import { ValidationError, useForm } from "@formspree/react";
import React from "react";
import styled from "styled-components/macro";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("meqwdgzd");
  if (state.succeeded) {
    return <p className=" fw-bold text-success text-center fs-3 mt-5">formulaire envoyé avec succés</p>;
  }

  return (
    <ContactFormStyled>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Nom</label>
                <input id="lastname" className="form-control" type="text" name="lastname" />
                <ValidationError prefix="lastname" field="lastname" errors={state.errors} />
              </div>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">Prénom</label>
                <input id="firstname" className="form-control" type="text" name="firstname" />
                <ValidationError prefix="firstname" field="firstname" errors={state.errors} />
              </div>
            </div>
            <label htmlFor="email" className="form-label">Adresse email</label>
            <input id="email" className="form-control" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="phone" className="form-label">Téléphone</label>
            <input id="phone" className="form-control" type="phone" name="phone" />
            <ValidationError prefix="phone" field="phone" errors={state.errors} />
            <label htmlFor="message" className="form-label mt-3">Votre message</label>
            <textarea id="message" rows="8" cols="40" name="message" className="form-control" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className="btn btn-success mt-3 float-end" type="submit" disabled={state.submitting}>
              Envoyer
            </button>
          </form>
    </ContactFormStyled>
  );
};

const ContactFormStyled = styled.div`

  form {
    color: white;
    margin: 50px auto;
    padding: 15px;
  }

  input, textarea {
    background-color: #ededed;
  }
  
  textarea {
  resize: none;
  }

  
`;

export default ContactForm;
