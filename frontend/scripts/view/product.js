
const createProductListOfCardElements=(productListOfObjects)=>{
    const productListNode = document.createElement("div")
    productListNode.classList.add("productList")
    productListOfObjects.forEach(product => {
        productListNode.appendChild(createProductCardElement(product))
    });
    return productListNode
}

/**
 * Since I am using Bootstrap, I will use the bootstrap components to style the components
 * @param {*} productObject 
 * @returns Element with the product styled as bootstrap card
 */
const createProductCardElement = (productObject) => {
    const productCardNode = document.createElement("div")
    productCardNode.classList.add("card")
    productCardNode.style = "width: 18rem;"

    productCardNode.appendChild(createCardImageElement(productObject.url_image))
    productCardNode.appendChild(createCardBodyElement(productObject.name))
    productCardNode.appendChild(createProductPriceAndDiscountedPriceElement(productObject.price,productObject.discount))
    
    return productCardNode
}

const createCardImageElement = (imageURL) => {
    const imageNode = document.createElement("img");
    imageNode.src = imageURL
    imageNode.classList.add("card-img-top")
    return imageNode
}
const createCardBodyElement = (productName)=>{
    const bodyNode = document.createElement("div")
    bodyNode.classList.add("card-body")
    bodyNode.appendChild(createCardTitleElement(productName))
    return bodyNode
}

const createCardTitleElement = (productName) => {
    const pvardTitleNode = document.createElement("h5");
    pvardTitleNode.innerHTML = productName
    pvardTitleNode.classList.add("card-title")
    return pvardTitleNode
}

const createProductPriceAndDiscountedPriceElement= (productPrice, productDiscount) => {
    const listGroupElement = document.createElement("ul");
    listGroupElement.classList.add("list-group")
    listGroupElement.classList.add("list-group-flush")

    const listGroupItemPriceElement = document.createElement("li")
    listGroupItemPriceElement.classList.add("list-group-item")
    const productPriceText= "Precio: $"+productPrice
    listGroupItemPriceElement.innerHTML=productPriceText
    listGroupElement.appendChild(listGroupItemPriceElement)

    if (productDiscount>0){
        listGroupItemPriceElement.classList.add("text-decoration-line-through")
        listGroupItemPriceElement.classList.add("text-muted")

        const listGroupItemDiscountedElement = document.createElement("li")
        listGroupItemDiscountedElement.classList.add("list-group-item")
        const discountedPrice = Math.round(productPrice * (1 - (productDiscount / 100)))
        const productDiscountedPriceText= "Precio de descuento: $"+discountedPrice
        listGroupItemDiscountedElement.innerHTML=productDiscountedPriceText
        listGroupElement.appendChild(listGroupItemDiscountedElement)
    }
    

    const discountedPrice = Math.round(productPrice * (1 - (productDiscount / 100)))
    const priceNode = document.createElement("div");
    priceNode.innerHTML = discountedPrice
    return listGroupElement
}




export { createProductCardElement as createProductElement  , createProductListOfCardElements as createProductListElement }