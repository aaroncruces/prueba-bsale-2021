/**
 * collection of methods to get category items from a database
 */
import {getTableAsObjectPromise} from "./database.js"

/**
 * Returns a promise of a list of categories with the structure
 * {
 *      id: number,
 *      name: string,
 * }
 * @returns Promise of a list of categories objects from the database
 */
 export const getCategoryListPromise = () => getTableAsObjectPromise('SELECT * FROM category')

/**
 * A single category given it's ID
 * with the structure:
 * {
 *      id: number,
 *      name: string,
 * }
 * @param {number} categoryID 
 * @returns Promise of a category
 */
export const getCategoryPromise = (categoryID) => getTableAsObjectPromise(`SELECT * FROM category WHERE id=${categoryID}`)
