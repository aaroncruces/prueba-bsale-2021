import {getTableAsObjectPromise} from "./database.js"
/**
 * Returns a promise of a list of products with the structure
 * {
 *       id: number,
 *       name: string,
 *       url_image: string,
 *       price: number,
 *       discount: number,
 *       category: number,
 * }
 * @returns Promise of a list of product objects from the database
 */
export const getProductListPromise =
    () =>
    getTableAsObjectPromise('SELECT * FROM product')

/**
 * Returns a promise of a list of products given a category ID in common
 * @param {string} categorID 
 * @returns Promise of a list of product objects from the database
 */
export const getProductListPromiseByCategoryId =
    (categorID) =>
    getTableAsObjectPromise(`SELECT * FROM product WHERE category=${categorID}`)