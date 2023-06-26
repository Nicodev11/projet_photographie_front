import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const inputs = document.querySelectorAll(".form-control");

  inputs.forEach((input) => {
    const alert = document.getElementById("alert");

    input.addEventListener("input", () => {
      if (alert.hasChildNodes()) {
        alert.removeChild(alert.firstChild);
      }  
    });
  
  })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/user/login", {email,password})
      .then((response) => {
        if(response.data.Login) {
          navigate("/admin");
        } else {
          const alert = document.createElement("div");
          alert.className = "text-danger mt-3 fw-bold alert-text";
          alert.innerHTML = "Email ou mot de passe incorrect";
          document.getElementById("alert").appendChild(alert);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <LoginStyled>
      <form onSubmit={handleSubmit} class="g-3">
        <h1 className="fs-3 text-white text-center">Connexion</h1>
        <div class="">
          <label for="validationCustom01" class="form-label text-white">
            Adresse Email
          </label>
          <input type="email" class="form-control" id="validationCustom01" autoComplete="current-email" onChange={(e) => setEmail(e.target.value)} required
          />
        </div>
        <div class="">
          <label for="validationCustom02" class="form-label text-white mt-3">
            Mot de passe
          </label>
          <input type="password" class="form-control" id="validationCustom02" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} required
          />
        </div>
        <div className="text-center" id="alert"></div>
        <div>
          <button class="btn btn-primary mt-3 float-end" type="submit">
            Se connecter
          </button>
        </div>
      </form>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  margin: auto;
  width: 50%;
  padding: 50px;
  background-color: #1a1a1a7f;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #000000;
`;
export default Login;
