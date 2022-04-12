import "./App.css";
import Users from "./users";

function App() {
  return (
    <div className="App">
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
          <Users />
        </tbody>
      </table>
    </div>
  );
}

export default App;

