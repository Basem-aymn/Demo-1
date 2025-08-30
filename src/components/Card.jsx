import React from "react";
import styled from "styled-components";

import pexelsSanaan from "../assets/pexels-sanaan-3052361.jpg";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <img
          className="img"
          src={pexelsSanaan}
          alt="Luxury car"
        />
        <div className="textBox">
          <p className="text head">Luxury Car</p>
          <span>Premium Service</span>
          <p className="text price">From $150</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 355px;
    height: 450px;
    background: #1a1a1a;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.2s ease-in-out;
    border: 1px solid #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transition: 0.2s ease-in-out;
    z-index: 1;
  }

  .textBox {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: 0.2s ease-in-out;
    z-index: 2;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;
  }

  .textBox > .text {
    font-weight: bold;
  }

  .textBox > .head {
    font-size: 20px;
  }

  .textBox > .price {
    font-size: 17px;
  }

  .textBox > span {
    font-size: 12px;
    color: lightgrey;
  }

  .card:hover > .textBox {
    opacity: 1;
  }

  .card:hover > .img {
    filter: blur(3px);
    transform: scale(1.1);
  }

  .card:hover {
    transform: scale(1.04) rotate(-1deg);
  }
`;

export default Card;
