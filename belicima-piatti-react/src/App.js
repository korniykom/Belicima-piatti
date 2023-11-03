import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import ShoppingList from "./components/Shopping-List/Shopping-List";
import StepList from "./components/Step-List/Step-List";
import dishes from "./data/Dishes.json";
import ingredients from "./data/DishesDetails.json";
import steps from "./data/DishesDetails.json";
const id = 1;
export default function App() {
  return (
    <div>
      <Nav />
      {/* <StepList StepList={steps.DishesDetails.at(id).steps} />
      <ShoppingList
        ShoppingList={ingredients.DishesDetails.at(id).ingredients}
      /> */}

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
