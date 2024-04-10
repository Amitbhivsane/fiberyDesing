import React, { useState } from "react";
import Header from "./componenet/header/Header";
import CalenderPopup from "./componenet/CalenderData/CalenderPopup";
import Userinfo from ".//componenet/userdata/Userinfo";
import Display from "./componenet/DataDisplay/Display";

function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [isDataPopupOpen, setIsDataPopupOpen] = useState(false);
  const [collectedData, setCollectedData] = useState({});

  const handleContactNext = (data) => {
    setCollectedData(data);
    setIsContactPopupOpen(false);
    setIsUserPopupOpen(true);
  };

  const handleUserDisplay = (data) => {
    setCollectedData(data);
    setIsUserPopupOpen(false);
    setIsDataPopupOpen(true);
  };

  return (
    <div>
      <Header onContactClick={() => setIsContactPopupOpen(true)} />
      {isContactPopupOpen && (
        <CalenderPopup
          onClose={() => setIsContactPopupOpen(false)}
          onNext={handleContactNext}
        />
      )}
      {isUserPopupOpen && (
        <Userinfo
          onClose={() => setIsUserPopupOpen(false)}
          onDisplay={handleUserDisplay}
          initialData={collectedData}
        />
      )}
      {isDataPopupOpen && (
        <Display
          data={collectedData}
          onClose={() => setIsDataPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
