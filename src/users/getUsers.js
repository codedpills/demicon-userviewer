import { getResource } from "../api/getResource";

const defaultParams = "?exc=login&results=20&";

export function getUsers() {
  const fetchUsers = getResource();

  return async function (filterParams) {
    try {
      const res = await fetchUsers(defaultParams + filterParams);
      return await res.json();
    } catch (error) {
      // Ideally we would log to an error reporting service
      console.log(error);
    }
  };
}
