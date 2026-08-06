function Navbar({cartCount,user}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px solid black",
        padding: "15px"
      }}
    >
      <div>
        <h2>QUICK BITE</h2>
        <p>Welcome,{user.name}</p>
        <p>Location:{user.location}</p>
      </div>
      <h3>Cart:{cartCount}items</h3>
    </div>
  );
}

export default Navbar;