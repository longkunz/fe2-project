import React, { Fragment, memo, useEffect, useState } from "react";
import Coin from "./Coin";
import PlantImage from "./PlantImage";
import styled from "styled-components";
//
export default memo(function GardenItem({
  plant,
  choosePlant,
  setPlant,
  deletePlant,
  tool,
  coinBankVal,
  setCoinBankVal,
  costTreeFood,
  costWateringCan,
  costBugSpray,
  costMusicPlayer,
}) {
  const [plantOpacity, setPlantOpacity] = useState(null);
  const [plantStatus, setPlantStatus] = useState(0); // 0: Seed, 1: Can't harvested, 2: Can harvested
  const [timer, setTimer] = useState(0);
  const [isPlanted, setIsPlanted] = useState(false);
  const [numberOfHarvest, setNumberOfHarvest] = useState(0);
  const [numberOfTool, setNumberOfTool] = useState(0);
  const timeTreeFood = 3;
  const timeWateringCan = 1;
  //
  useEffect(() => {
    if (isPlanted) {
      if (plantStatus === 3) {
        setPlantStatus(1);
        setNumberOfHarvest(numberOfHarvest + 1);
        setTimer(plant?.timer);
      }
      if (timer === -1) {
        //Plant status increase
        setPlantStatus(plantStatus + 1);
        setTimer(plant?.timer);
      }
      if (numberOfHarvest === 3) {
        handleDeletePlantAndSetDefaultState();
        setNumberOfTool(0);
        return;
      }
      //Plating
      const setTime = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => {
        clearInterval(setTime);
      };
    }
  }, [timer]);
  //
  const handleDeletePlantAndSetDefaultState = () => {
    deletePlant();
    setPlantOpacity(null);
    setPlantStatus(0);
    setTimer(null);
    setIsPlanted(false);
    setNumberOfHarvest(0);
  };
  //
  const handleInteractWithPlant = () => {
    if (tool === null) {
      //Plant a tree
      if (choosePlant && !isPlanted && coinBankVal >= choosePlant?.salePrice) {
        setPlantStatus(0);
        setIsPlanted(true);
        setTimer(choosePlant?.timer);
        setPlant();
        return;
      }
      //Harvest plant
      if (!choosePlant && plantStatus === 2) {
        setCoinBankVal(
          coinBankVal + plant?.salePrice * 2
            ? coinBankVal + plant?.salePrice * 2
            : 0
        );
        setPlantStatus(1);
        setNumberOfHarvest(numberOfHarvest + 1);
        setTimer(plant?.timer);
        return;
      }
    }
    if (numberOfTool != 1) {
    }
    if (isPlanted) {
      switch (tool) {
        case "shovel":
          handleDeletePlantAndSetDefaultState();
          break;
        case "tree-food":
          if (plantStatus != 2 && coinBankVal >= costTreeFood) {
            setCoinBankVal(
              coinBankVal - costTreeFood ? coinBankVal - costTreeFood : 0
            );
            setTimer(timer - timeTreeFood);
            if (timeTreeFood > timer) {
              setPlantStatus(plantStatus + 1);
              setTimer(plant?.timer);
            }
          }
          break;
        case "watering-can":
          if (plantStatus != 2 && coinBankVal >= costWateringCan) {
            setCoinBankVal(
              coinBankVal - costWateringCan ? coinBankVal - costWateringCan : 0
            );
            setTimer(timer - timeWateringCan);
            if (timeWateringCan > timer) {
              setPlantStatus(plantStatus + 1);
              setTimer(plant?.timer);
            }
          }
          break;
        default:
          break;
      }
      //Update Tools
      if (numberOfTool != 1) {
        if (tool === "bug-spray" && coinBankVal >= costBugSpray) {
          setNumberOfTool(numberOfTool + 1);
          setNumberOfHarvest(numberOfHarvest - 1);
          setCoinBankVal(
            coinBankVal - costBugSpray ? coinBankVal - costBugSpray : 0
          );
        }
        if (tool === "phonograph" && coinBankVal >= costMusicPlayer) {
          setNumberOfTool(numberOfTool + 1);
          setNumberOfHarvest(numberOfHarvest - 2);
          setCoinBankVal(
            coinBankVal - costMusicPlayer ? coinBankVal - costMusicPlayer : 0
          );
        }
      }
    }
  };
  //
  const sale = plant?.salePrice;
  //
  return (
    <Con
      onClick={() => handleInteractWithPlant()}
      onMouseEnter={() => {
        setPlantOpacity(choosePlant?.image2);
      }}
      onMouseLeave={() => {
        setPlantOpacity(null);
      }}
    >
      {plant && (
        <Fragment>
          <PlantImage
            plant={plant}
            plantStatus={plantStatus}
            plantOpacity={plantOpacity}
          />
          {isPlanted && (
            <>
              <Coin plantStatus={plantStatus} sale={sale} />
              <progress
                value={timer}
                max="10"
                style={{ width: 50, position: "absolute", bottom: 66 }}
              />
            </>
          )}
        </Fragment>
      )}
    </Con>
  );
});
//
const Con = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
position: relative;
background-color: #fff0;
padding-bottom: 75px;
background-image: url("./assets/images/pots/Pot.png");
background-repeat: no-repeat;
background-position: center;
background-size: 60px 80px;
`;

