import "./Shopping-List-Item.css";
export default function ShoppingListItem({ product, price, calories }) {
  return (
    <div className="Shopping-List">
      <div className="ingredients">
        <p>{product}</p>
      </div>

      <div className="price">
        <p>{price}$</p>
      </div>
      <div className="calories">
        <p>{calories} калорій</p>
      </div>
    </div>
  );
}
