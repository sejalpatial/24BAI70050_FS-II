function UserInfo({user}) {
  return (
    <div>
      <h2>Customer Details</h2>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
      <p>Location:{user.location}</p>
    </div>
  );
}
export default UserInfo;