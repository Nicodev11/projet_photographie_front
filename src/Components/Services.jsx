import React, { useState } from "react";
import styled from 'styled-components/macro'
import { servicesData } from "../data/servicesData";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const item = servicesData[currentIndex];

  const nextItem = () => {
    setCurrentIndex(currentIndex === servicesData.length - 1 ? 0 : currentIndex + 1);
  };
  const previousItem = () => {
    setCurrentIndex(currentIndex === 0 ? servicesData.length - 1: currentIndex - 1);
  };

  return (
    <ServiceStyled className="my-3">
      <ButtonStyled>
        <i onClick={previousItem} class="bi bi-chevron-left left"></i>
      </ButtonStyled>
      <div className="container services-main my-auto">
        <div className="row">
          <div className="img-content col-md-6">
            <div className="img-container hover">
              <img
                src={item.img}
                alt={item.title}
                className="img-thumbnail"
              />
            </div>
          </div>
          <div className="services-content text-center text-white col-md-6">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <span>
              <p>{item.infos}</p>
            </span>
            <ul className="places">
              {item.places.map((item) => (
                <li key={item}> {item} </li>
              ))}
            </ul>
            <div className="price">{item.price}</div>
          </div>
        </div>
      </div>
      <ButtonStyled>
        <i onClick={nextItem} class="bi bi-chevron-right right float-end"></i>
      </ButtonStyled>
    </ServiceStyled>
  );
};

const ServiceStyled = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
  height: 100%;

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
    
  }
  `

  const ButtonStyled = styled.div `

  i {
    position: relative;
    top: 50%;
    font-size: 3rem;
    color: rgb(255, 255, 255);
    transition: 0.25s;

    &:hover {
      font-size: 3.5rem;
    }
  }
`

export default Services;