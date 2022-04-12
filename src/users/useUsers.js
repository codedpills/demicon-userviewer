import { useState, useEffect } from "react";
import { getUsers } from "./getUsers";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await getUsers();
      setUsers(res.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  return { users, loading };
}