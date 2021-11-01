import getTableAsObjectPromise from "./database.js"
const sqlSelectAllProducts = 'SELECT * FROM product'
/**
 * Returns a promise of a list of products with the structure
 * {todo}
 * @returns Promise of a list of product objects from the database
 */
const getProductListPromise = () => getTableAsObjectPromise(sqlSelectAllProducts)
export default getProductListPromise