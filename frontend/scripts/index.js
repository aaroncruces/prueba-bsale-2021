import {createCategoriesElement } from "./view/category.js"
import {categoryListPromise} from "./model/categories.js"
import {productListByCategoryPromise} from "./model/products.js"

const renderContent=async ()=>{
  //1: fetch only categories
  const element_content = document.getElementById("content")
  const categoryList = await categoryListPromise()

  //2: for each category, get corresponding products
  const categoryListWithProductListPromise=categoryList.map(
    async category=>{
      const productList= await productListByCategoryPromise(category.id)
      return {...category,productList:productList}
    }
  )
  const categoryListWithProductListResolved=await Promise.all(categoryListWithProductListPromise)

  //3 render all categories with corresponding products
  console.log(categoryListWithProductListResolved)
  element_content.appendChild(createCategoriesElement(categoryListWithProductListResolved))
}
renderContent()
