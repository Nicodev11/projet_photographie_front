import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro'

const Navigation = () => {

  return (
      <nav class="navbar navbar-expand-lg bg-dark text-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img className='w-75' src="./img/logo.png" alt="logo" />
          </a>
          <button class="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <NavItem class="nav-item">
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                  Accueil
                </NavLink>
              </NavItem>
              <NavItem class="nav-item">
                <NavLink to="/galerie" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                  Galerie
                </NavLink>
              </NavItem>
              <NavItem class="nav-item">
                <NavLink to={"/prestation-1"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                  Prestations/tarifs
                </NavLink>
              </NavItem>
              <NavItem class="nav-item">
                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                  Contact
                </NavLink>
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
  );
};

const NavItem = styled.li `
  a {
    text-decoration: none;
    color: whitesmoke;
    font-size: 1.2rem;
    margin: auto 15px;
    display: flex;
    justify-content: center;
    padding: 7px;
    font-family: 'Dancing Script', cursive;
    font-size: 1.7rem;
  }

  .active {
    background: whitesmoke;
    border-radius: 10px;
    color: black;
    transition: ease 0.8s;
  }
`

export default Navigation;