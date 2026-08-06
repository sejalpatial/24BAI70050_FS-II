import Restaurant from "./Restaurant";

function Home({user,addToCart}) {
  return (
    <Restaurant
      user={user}
      addToCart={addToCart}
    />
  );
}
export default Home;