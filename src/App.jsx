import  { useState } from "react";
import Header from "./components/Layout/Header";

function App() {
  const [cartItems] = useState([]);

  return (
    <div>
      <Header cartItemCount={cartItems.length} />

      <main>
        <h2>Delicious Meals</h2>
      </main>
    </div>
  );
}

export default App;