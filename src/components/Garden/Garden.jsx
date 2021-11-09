import React, { memo } from "react";
import GardenItem from "./GardenItem";
import styled from "styled-components";
//
export default memo(function Garden({
  plants,
  choosePlant,
  setPlant,
  deletePlant,
  tool,
  coinBankVal,
  setCoinBankVal,
}) {
  //
  return (
    <Con>
      {plants.map((plant, index) => (
        <GardenItem
          key={index}
          plant={plant}
          choosePlant={choosePlant}
          setPlant={() => setPlant(index)}
          deletePlant={() => deletePlant(index)}
          tool={tool}
          coinBankVal={coinBankVal}
          setCoinBankVal={setCoinBankVal}
        />
      ))}
    </Con>
  );
});
//
const Con = styled.div`
  position: absolute;
  left: 34%;
  top: 14%;
  width: 500px;
  height: 480px;
  display: grid;
  grid-template-columns: repeat(6, auto);
`;