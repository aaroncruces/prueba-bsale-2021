import getTableAsObjectPromise from "./database.js"

/**
 * Returns a promise of a list of categories with the structure
 * {todo}
 * @returns Promise of a list of categories objects from the database
 */
const getCategoryListPromise = () => getTableAsObjectPromise('SELECT * FROM category')
const getCategoryPromise=(categoryID)=>getTableAsObjectPromise(`SELECT * FROM category WHERE id=${categoryID}`)
export { getCategoryListPromise, getCategoryPromise}