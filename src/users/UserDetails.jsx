function UserDetails(props) {
  return (
    <div className="user-details">
      <h1>User Details Page</h1>
      <p>
        If I had more time, I would get the userid from the url params and use
        that to find the user (which I will access from the props via context).
        Then I would render the user details.
      </p>
    </div>
  );
}

export default UserDetails;
