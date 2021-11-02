import {
    getTableAsObjectPromise
} from "./database.js"
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
/**
 * Returns a reduced list of products filtered by their names
 * @param {string} filteringParameter text in common with all the product names on the resulting array
 * @param {array} productList array with all the product to be filtered
 * @returns array of products with common name parts
 */
export const filterProductListByName =
    (filteringParameter, productList) =>
    productList.reduce(
        (accumulatedList, productIterated) => {
            doesAStringContainsAnother(productIterated.name, filteringParameter) &&
                accumulatedList.push(productIterated)
            return accumulatedList
        }, []
    )


const doesAStringContainsAnother = (rawStringContaining, rawStringContained) => {
    const stringToCompareOn = normalizeString(rawStringContaining)
    const arrayToBeCompared = normalizeString(rawStringContained).split(" ")
    const itContains = arrayToBeCompared.reduce(
        (itStillMatches, iteratedSubString) =>
        itStillMatches && stringToCompareOn.includes(iteratedSubString), true
    )
    return itContains
}
/**
 * Normalizes any string to be able to be searched 
 * @param {string} rawString 
 * @returns Normalize String
 */
const normalizeString = (rawString) => {
    let currenTransformedString = rawString.trim()
    currenTransformedString = currenTransformedString.toLowerCase()
    currenTransformedString = currenTransformedString.replaceAll(/\s\s+/g, " ")
    currenTransformedString = currenTransformedString.replaceAll("à", "a");
    currenTransformedString = currenTransformedString.replaceAll("á", "a");
    currenTransformedString = currenTransformedString.replaceAll("è", "e");
    currenTransformedString = currenTransformedString.replaceAll("é", "i");
    currenTransformedString = currenTransformedString.replaceAll("ì", "o");
    currenTransformedString = currenTransformedString.replaceAll("í", "i");
    currenTransformedString = currenTransformedString.replaceAll("ò", "o");
    currenTransformedString = currenTransformedString.replaceAll("ó", "o");
    currenTransformedString = currenTransformedString.replaceAll("ù", "u");
    currenTransformedString = currenTransformedString.replaceAll("ú", "u");
    currenTransformedString = currenTransformedString.replaceAll("ñ", "n");
    currenTransformedString = currenTransformedString.replaceAll(/[^(\w)\s]/gi, "");
    return currenTransformedString
}