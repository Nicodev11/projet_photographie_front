import React, { useState } from "react";
import styled from 'styled-components/macro'
import { servicesData } from "../data/servicesData";

const Services = ({serviceNumber}) => {

  const [currentServices] = useState(servicesData[serviceNumber]);

  return (
    <ServiceStyled>
      <div className="container services-main">
        <div className="row">
          <div className="img-content col-md-6">
            <div className="img-container hover">
              <img
                src={currentServices.img}
                alt={currentServices.title}
                className="img-thumbnail"
              />
            </div>
          </div>
          <div className="services-content text-center text-white col-md-6">
            <h1>{currentServices.title}</h1>
            <p>{currentServices.description}</p>
            <span>
              <p>{currentServices.infos}</p>
            </span>
            <ul className="places">
              {currentServices.places.map((item) => (
                <li key={item}> {item} </li>
              ))}
            </ul>
            <div className="price">{currentServices.price} €</div>
          </div>
        </div>
      </div>
    </ServiceStyled>
  );
};

const ServiceStyled = styled.div `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5rem;

  .services-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
      font-family: 'Dancing Script', cursive;
      font-size: 3rem;
    }

    li {
      list-style-type: none;
    }

    .price {
      display: flex;
      justify-content: end;
      font-size: 1.8rem;
    }

    span {
      font-size: 1rem;
      font-family: 'Courier New', Courier, monospace;
      font-style: italic;
    }

    .img-container {
      animation:flip-scale-up-hor .5s linear both
    }
    @keyframes flip-scale-up-hor{0%{transform:scale(1) rotateX(0)}50%{transform:scale(2.5) rotateX(-90deg)}100%{transform:scale(1) rotateX(-180deg)}}
     
  }

`

export default Services;