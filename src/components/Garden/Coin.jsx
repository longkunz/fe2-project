import React from "react";
import styled from "styled-components";
//
export default function Coin({ plantStatus, sale }) {
  return (
    <div>
      {plantStatus == 2 && (
        <CoinImage
          src={`./assets/images/inf/cart.png`}
        />
      )}
    </div>
  );
}
//
const CoinImage = styled.img`
  position: absolute;
  top: 40px;
  left: 10px;
  width: 40px;
`;
