import { Link } from "react-router-dom";

function User({ name, email, gender, location }) {
  return (
    <tr>
      <td>
        {name.first} {name.last}
      </td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{location.city}</td>
      <td>
        <Link to={`users/${email}`}>see full details</Link>
      </td>
    </tr>
  );
}

export default User;
