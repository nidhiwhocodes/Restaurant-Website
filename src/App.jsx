import  { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  const [cartItems] = useState([]);

  return (
    <div>
      <Header cartItemCount={cartItems.length} />

      <MealsSummary />
    </div>
  );
}

export default App;