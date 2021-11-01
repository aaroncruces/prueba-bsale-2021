import {
    fetchObjectsFromServerAsPromise
} from "./server.js"
const CATEGORY_LIST_URL = "categories"
/**
 * Returns a list of all categories in the Database
 * with the structure:
 * {
 *      id: number,
 *      name: string,
 * }
 * @returns Promise of a list of category objects
 */
export const categoryListPromise =
    () =>
    fetchObjectsFromServerAsPromise(CATEGORY_LIST_URL)
