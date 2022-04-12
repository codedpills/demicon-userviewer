const baseUrl = "https://randomuser.me/api";

/**
 * Builds the url for the API call based on the query params 
 * @returns {Promise} fetch
 * @param {string} path
 */
export function getResource() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return (path) => {
    const url = baseUrl + path;
    return fetch(url, options);
  };
};
