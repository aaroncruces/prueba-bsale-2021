
/**
 * can be set to be another url to get the api data
 */
const SERVER_URL = ""
const API_URL = "/api"

/**
 * Returns a Promise of a object or array from the server api
 * @param {string} subPathURL example: "category", "products/category/3"
 * @returns Promise with data as object
 */
export const fetchObjectsFromServerAsPromise = (subPathURL) =>
    fetch(SERVER_URL+API_URL+"/"+subPathURL)
    .then(response => response.json());
