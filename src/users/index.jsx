import User from "./User";

function Users({ users, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <>
      {users.map((user) => (
        <User {...user} key={user.email} />
      ))}
    </>
  );
}

export default Users;
