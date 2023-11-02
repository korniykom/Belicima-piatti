import Card from "./Card";
import Nav from "./components/Nav/Nav";
import ShoppingList from "./components/Shopping-List/Shopping-List";
import StepList from "./components/Step-List/Step-List";
import dishes from "./Dishes.json";
import ingredients from "./DishesDetails.json";
import steps from "./DishesDetails.json";
const id = 1;
export default function App() {
  return (
    <div>
      <Nav />
      <StepList StepList={steps.DishesDetails.at(id).steps} />
      <ShoppingList
        ShoppingList={ingredients.DishesDetails.at(id).ingredients}
      />

      {dishes.dishes.map((dish) => (
        <Card
          key={dish.id}
          id={dish.id}
          name={dish.name}
          img={dish.img}
          score={dish.score}
          duration={dish.duration}
          price={dish.price}
          calories={dish.calories}
        />
      ))}
    </div>
  );
}
