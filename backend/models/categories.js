import getTableAsObjectPromise from "./database.js"
const sqlSelectAllProducts = 'SELECT * FROM category'
/**
 * Returns a promise of a list of categories with the structure
 * {todo}
 * @returns Promise of a list of categories objects from the database
 */
const getCategoryListPromise = () => getTableAsObjectPromise(sqlSelectAllProducts)
export default getCategoryListPromise