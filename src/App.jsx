import "./App.css";
import Users from "./users";
import { useUsers } from "./users/useUsers";
import { SearchInput } from "./shared/SearchInput";

function App() {
  const { loading, users, fetchUsers } = useUsers();

  return (
    <div className="App">
      <h2>D3m1c0n Random User Viewer</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Location</th>
            <th>
              <SearchInput
                loading={loading}
                onSearch={fetchUsers}
                fetchOnEmpty
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <Users users={users} loading={loading} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
