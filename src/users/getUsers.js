import { getResource } from "../api/getResource";

export async function getUsers() {
    const fetchUsers = getResource();
    try {
       const res = await fetchUsers("?results=10"); 
       return await res.json();
    } catch (error) {
        // Ideally we would log to an error reporting service
        console.log(error);
    }
}