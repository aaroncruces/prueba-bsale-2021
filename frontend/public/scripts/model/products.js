import {
    fetchObjectsFromServerAsPromise
} from "./server.js"
const PRODUCT_LIST_URL = "products"
const PRODUCT_LIST_BY_CATEGORY_URL = "products/category/"

/**
 * Deprecated.
 * Returns a list of all the products as a promise
 * @returns Promise of all the products in the database
 */
const productListPromise =
    () =>
    fetchObjectsFromServerAsPromise(PRODUCT_LIST_URL)

/**
 * Returns a promise of all the products that have a given category ID
 * @param {number} categoryId 
 * @returns Promise of a list with the products of this category
 */
export const productListByCategoryPromise =
    (categoryId) =>
    fetchObjectsFromServerAsPromise(PRODUCT_LIST_BY_CATEGORY_URL + categoryId)