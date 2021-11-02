/**
 * can be set to be another url to get the api data
 */
const SERVER_URL = window.location.href.includes("http://localhost:8000")?"http://localhost:3000":"" 
const API_URL = "/api"


/**
 * Returns a Promise of a object or array from the server api
 * @param {string} subPathURL example: "category", "products/category/3"
 * @returns Promise with data as object
 */
export const fetchObjectsFromServerAsPromise = (subPathURL) =>
    fetch(SERVER_URL + API_URL + "/" + subPathURL, {
        mode: 'cors'
    })
    .then(response => response.json());