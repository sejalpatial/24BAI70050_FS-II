import { useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserContext from "./context/UserContext";
function App() {
  const user={
    name:"Rahul Sharma",
    email: "rahul@gmail.com",
    location: "Chandigarh"
  };
  const [cartCount, setCartCount] = useState(0);
  const addToCart=()=>{
    setCartCount(prev=>prev+1);
  };
  return (
    <UserContext.Provider value={user}>
      <Navbar
        cartCount={cartCount}
        user={user}
      />
      <Home
        user={user}
        addToCart={addToCart}
      />
    </UserContext.Provider>

  );
}
export default App;
