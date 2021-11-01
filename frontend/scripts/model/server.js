//temporary use since I require to use a frontend dev server that is update every time i make a change
// using fetch('http://localhost:3000/api/products', {mode: 'cors'})
// cors should be disabled on deploy

const SERVER_URL = "http://localhost:3000"
const API_URL = "/api"

/**
 * 
 * @param {string} subPathURL example: "category", "products/category/3"
 * @returns Promise with data as object
 */
const fetchObjectsFromServerAsPromise = (subPathURL) =>
    fetch(SERVER_URL+API_URL+"/"+subPathURL, {
        mode: 'cors',
    })
    .then(response => response.json());

export {fetchObjectsFromServerAsPromise}
/*
fetch('http://localhost:3000/api/products', {
    mode: 'cors',
  })
  .then(response => response.json())
  .then(data => console.log(data));

  */