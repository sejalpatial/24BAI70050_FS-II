import UserInfo from "./UserInfo";
const foodItems = [
  {
    id: 1,
    name: "Pizza",
    price: 299
  },
  {
    id: 2,
    name: "Burger",
    price: 149
  },
  {
    id: 3,
    name: "Pasta",
    price: 199
  }
];
function FoodMenu({user,addToCart}) {
  return (
    <div>
      <h2>Food Menu</h2>
      {
        foodItems.map(item => (
          <div key={item.id}>
            {item.name} {item.price}
            <button
              onClick={addToCart}
              style={{ marginLeft: 10 }}
            >
            Add To Cart
            </button>
            <br />
          </div>
        ))
      }
      <UserInfo user={user}/>
    </div>
  );
}

export default FoodMenu;


