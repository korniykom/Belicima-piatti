import ShoppingListItem from "./Shopping-List-Item";
import "./Shopping-List.css";
import { useState } from "react";
export default function ShoppingList({ ShoppingList }) {
  const [maxDisplay, setMaxDisplay] = useState(4);
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setMaxDisplay(20);
    setIsOpen(!isOpen);
  }
  function handleClose() {
    setMaxDisplay(4);
    setIsOpen(!isOpen);
  }
  return (
    <>
      <h2>Shopping List</h2>

      {ShoppingList.map((item, index) => (
        <>
          {index < maxDisplay && (
            <ShoppingListItem
              product={item.name}
              price={item.price}
              calories={item.calories}
              fat={item.fat}
              protein={item.protein}
              carbs={item.carbs}
              key={item.id}
            />
          )}
        </>
      ))}

      {ShoppingList.length > 4 && (
        <div className="box">
          {!isOpen ? (
            <div onClick={handleOpen} className="more-button">
              Дізнатися більше
            </div>
          ) : (
            <div onClick={handleClose} className="more-button">
              Приховати
            </div>
          )}
        </div>
      )}
    </>
  );
}
