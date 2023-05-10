import React from "react";
import styled from 'styled-components/macro'
import { NavLink } from "react-router-dom";

const Button = (props) => {

  return (
    <ButtonStyled>
      <div className="scroll-bottom">
        {props.left && (
          <NavLink to={props.left} className="left hover">
            <i class="bi bi-chevron-left"></i>
          </NavLink>
        )}
        {props.right && (
          <NavLink to={props.right} className="right hover">
            <i class="bi bi-chevron-right"></i>
          </NavLink>
        )}
      </div>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div `
  a {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    font-size: 3rem;
    color: rgb(184, 183, 183);
    transition: 0.25s;
    user-select: none;
    padding: 0 14px;

    &:hover {
      font-size: 4rem;
    }
  }

  .left {
    left: 25px;
  }

  .right {
    right: -25px;
  }
`

export default Button;