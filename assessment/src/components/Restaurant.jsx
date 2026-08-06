import FoodMenu from "./FoodMenu";
function Restaurant({user,addToCart}) {
  return (
    <FoodMenu
      user={user}
      addToCart={addToCart}
    />
  );
}
export default Restaurant;