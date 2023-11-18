import ShoppingListItem from "./Shopping-List-Item";
import "./Shopping-List.css";
export default function ShoppingList({ ShoppingList }) {
  return (
    <>
      <h2>Shopping List</h2>
      {ShoppingList.map((item) => (
        <ShoppingListItem
          product={item.name}
          price={item.price}
          calories={item.calories}
          key={item.id}
        />
      ))}
      {/* {console.log(typeof ShoppingList)} */}
    </>
  );
}
