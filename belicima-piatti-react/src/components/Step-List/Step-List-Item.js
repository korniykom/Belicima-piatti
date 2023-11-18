import "./Step-List-Item.css";
import { useState } from "react";

export default function Step({ number = 1, description }) {
  const [buttonValue, setButtonValue] = useState(number);
  return (
    <div className="flex-container">
      <div className="number-container">
        <button className="number" onClick={handleOnClick}>
          {buttonValue}
        </button>
      </div>
      <div className="description">{description}</div>
    </div>
  );
  function handleOnClick(currentSign) {
    setButtonValue(<span class="material-symbols-outlined">done</span>);
  }
}
