import {
  createCategoriesElement
} from "./view/category.js"
import {
  categoryListPromise
} from "./model/categories.js"
import {
  productListByCategoryPromise,
  producListBynameFilterPromise
} from "./model/products.js"


/**
 * renders the products in the content section of the webpage
 */
const renderContent = async () => {
  //1: fetch only categories
  const contentAreaElement = document.getElementById("content")
  const categoryList = await categoryListPromise()

  //2: for each category, get corresponding products
  const categoryListWithProductListPromise = categoryList.map(
    async category => {
      const productList = await productListByCategoryPromise(category.id)
      return {
        ...category,
        productList: productList
      }
    }
  )
  const categoryListWithProductListResolved = await Promise.all(categoryListWithProductListPromise)

  //3 render all categories with corresponding products
  contentAreaElement.appendChild(createCategoriesElement(categoryListWithProductListResolved))
}
renderContent()

/**
 * renders search results by name
 */
document.getElementById("search-button").addEventListener("click", async () => {
  const searchText = document.getElementById("search-input").value.trim()
  const contentAreaElement = document.getElementById("content")

  //1, Am I really searching?
  if (!searchText) return;

  //2: get objects to render
  const productsFilteredByName=await producListBynameFilterPromise(searchText)
  const searchItemCategoryContainer={id:0,name:"Resultados de la busqueda",productList:productsFilteredByName}

  //3: render
  cleanElement(contentAreaElement)
  contentAreaElement.appendChild(createCategoriesElement([searchItemCategoryContainer]))

});

/**
 * cleans every child node of an element
 * @param {*} htmlNodeElement 
 */
const cleanElement = (htmlNodeElement) => {
  while (htmlNodeElement.firstChild) {
    htmlNodeElement.removeChild(htmlNodeElement.lastChild);
  }
}