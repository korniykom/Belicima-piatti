import ShoppingListItem from "./Shopping-List-Item";
import "./Shopping-List.css";
export default function ShoppingList({ ShoppingList }) {
  return (
    <>
      <h2>Shopping List</h2>
      {ShoppingList.map((item) => (
        <ShoppingListItem
          product={item.product}
          price={item.price}
          calories={item.calories}
        />
      ))}
    </>
  );
}
