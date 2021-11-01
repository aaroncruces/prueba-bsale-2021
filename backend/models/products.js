import getTableAsObjectPromise from "./database.js"
/**
 * Returns a promise of a list of products with the structure
 * {todo}
 * @returns Promise of a list of product objects from the database
 */
const getProductListPromise = () => getTableAsObjectPromise('SELECT * FROM product')
const getProductListPromiseByCategoryId=(categorID)=>getTableAsObjectPromise(`SELECT * FROM product WHERE category=${categorID}`)
export  {getProductListPromise,getProductListPromiseByCategoryId}