import { useState } from "react";
import { getCountryCode } from "../shared/getCountryCode";
import { getUsers } from "./getUsers";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetch = getUsers();

  async function fetchUsers(searchTerm) {
    const countryCode = getCountryCode(searchTerm?.toLowerCase());
    const filterParams = searchTerm ? `nat=${countryCode}` : "";

    try {
      const res = await fetch(filterParams);
      setUsers(res.results);
      setLoading(false);
    } catch (error) {
      // Ideally we would display an error message to the user
      console.log(error);
    }
  }

  return { users, loading, fetchUsers };
}
