import {
    fetchObjectsFromServerAsPromise
} from "./server.js"
const PRODUCT_LIST_URL = "products"
const PRODUCT_LIST_BY_CATEGORY_URL = "products/category/"

const productListPromise =
    () =>
    fetchObjectsFromServerAsPromise(PRODUCT_LIST_URL)

export const productListByCategoryPromise =
    (categoryId) =>
    fetchObjectsFromServerAsPromise(PRODUCT_LIST_BY_CATEGORY_URL+categoryId)