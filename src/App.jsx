import React, { useState, useEffect, memo, lazy, Suspense } from "react";
const CoinBank = lazy(() => import("./components/CoinBank"));
const Garden = lazy(() => import("./components/Garden/Garden"));
const SendBank = lazy(() => import("./components/SendBank/SendBank"));
import plants from "./constants/plants";
import { objectToArray, isEmptyObject } from "./helpers/commonFunctions";
import backgrounds from "./constants/backgrounds";

const plantsList = objectToArray(plants);
const soundtrack = new Audio(`./assets/sounds/audio.mp3`);

export default memo(function App() {
  const [coinBankVal, setCoinBankVal] = useState(300); //money
  const [plants, setPlants] = useState([...Array(12).fill({})]); //land
  const [choosePlant, setChoosePlant] = useState(null);
  const [tool, setTool] = useState(null);
  const [bg, setBg] = useState(backgrounds[0]);
  const [playSoundTrack, setPlaySoundtrack] = useState(false);

  //
  useEffect(() => {
    // if game started
    window.scrollTo(0, 1);
    const started = localStorage.getItem("game-started");
    if (started) {
      const coinBank = localStorage.getItem("game-coin-bank");
      setCoinBankVal(parseInt(coinBank));
    }
  }, []);

  //
  const handleSetPlant = (index) => {
    // check plant exists and selected
    if (!choosePlant) {
      return;
    }
    if (!isEmptyObject(plants[index])) {
      return;
    }
    // price action
    const coinPrice = coinBankVal - choosePlant.purchasePrice;
    if (coinPrice < 0) {
      return;
    }
    setCoinBankVal(coinPrice);
    // set plants
    const newPlants = [...plants];
    newPlants[index] = choosePlant;
    setPlants(newPlants);
    setChoosePlant(null);
  };

  const handleDeletePlant = (index) => {
    // delete plants
    const newPlants = [...plants];
    newPlants[index] = {};
    setPlants(newPlants);
  };

  //Sound
  useEffect(() => {
    soundtrack.load();
    soundtrack.play();
    soundtrack.muted= true;
  }, [playSoundTrack]);


  //
  const backgroundImage = bg !== undefined ? `url(${bg})` : "";
  //
  return (
    <Suspense
      fallback={
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            color: "white",
          }}
        >
          Loading...
        </h1>
      }
    >
      <div className="gd-container" onClick={()=>{
        setPlaySoundtrack(true);
        soundtrack.muted=false;
      }}>
        <div className="gd-container-game" style={{ backgroundImage }}>
          <div style={{ display: bg === undefined ? "none" : "block" }} >
            <SendBank
              coinBankVal={coinBankVal}
              plants={plantsList}
              choosePlant={choosePlant}
              setChoosePlant={(plant) => {
                setChoosePlant(plant !== choosePlant ? plant : null);
              }}
              tool={tool}
            />
            <Garden
              plants={plants}
              choosePlant={choosePlant}
              setPlant={handleSetPlant}
              deletePlant={handleDeletePlant}
              tool={tool}
              coinBankVal={coinBankVal}
              setCoinBankVal={setCoinBankVal}
            />
            <CoinBank coinBankVal={coinBankVal} />
          </div>
        </div>
      </div>
    </Suspense>
  );
});
