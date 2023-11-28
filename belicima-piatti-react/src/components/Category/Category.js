import React, { useState } from "react";
import "../Step-List/Step-List-Item";

export default function Step({ number = 1, description }) {
  const [buttonValue, setButtonValue] = useState(number);

  return (
    <div className="flex-container">
      <div className="number-container">
        <button
          className="number"
          onClick={() =>
            setButtonValue(<span class="material-symbols-outlined">done</span>)
          }
        >
          {number}
        </button>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}
