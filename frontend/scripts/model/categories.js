import {
    fetchObjectsFromServerAsPromise
} from "./server.js"
const CATEGORY_LIST_URL = "categories"
const categoryListPromise =
    () =>
    fetchObjectsFromServerAsPromise(CATEGORY_LIST_URL)
export {
    categoryListPromise
}