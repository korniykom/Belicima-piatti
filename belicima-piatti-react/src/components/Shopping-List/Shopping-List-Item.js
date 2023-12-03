import "./Shopping-List-Item.css";
import { useState } from "react";
export default function ShoppingListItem({
  product,
  price,
  calories,
  fat,
  protein,
  carbs,
}) {
  const [isClose, setIsClose] = useState(true);
  function handleIngredientOpen() {
    setIsClose(!isClose);
  }
  return (
    <>
      {" "}
      {isClose ? (
        <div onClick={handleIngredientOpen} className="Shopping-List">
          <div className="ingredients">
            <p>{product}</p>
          </div>
          <div className="calories">
            <p>{calories} калорій</p>
          </div>

          <div className="price">
            <p>{price}$</p>
          </div>
        </div>
      ) : (
        <div onClick={handleIngredientOpen} className="Shopping-List-open">
          <div className="first-column">
            <div className="ingredients">
              <p>{product}</p>
            </div>
          </div>
          <div className="second-column">
            <div className="calories">
              <p>{calories}г. калорій</p>
              <p>{fat}г. жирів</p>
              <p>{protein}г. білків</p>
              <p>{carbs}г. вуглеводів</p>
            </div>
          </div>
          <div className="third-column">
            <div className="price">
              <p>{price}$</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
