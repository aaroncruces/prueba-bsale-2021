//temporary use since I require to use a frontend dev server that is update every time i make a change
// using fetch('http://localhost:3000/api/products', {mode: 'cors'})

fetch('http://localhost:3000/api/products', {mode: 'cors'})
  .then(response => response.json())
  .then(data => console.log(data));

document.getElementById("content").innerHTML = "Hello World!";