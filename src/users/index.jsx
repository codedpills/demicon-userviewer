import User from "./User";
import { useUsers } from "./useUsers";

function Users() {
  const { users, loading } = useUsers();

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
