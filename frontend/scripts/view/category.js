import {
    createProductListElement
} from "./product.js"

/**
 * 
 * @param {object} categoryObjectListWithProductListAttached  an object with {...category, productList:[products]}
 * @returns 
 */
const createCategoriesAccordionElement = (categoryObjectListWithProductListAttached) => {
    const categoriesAccordionNode = document.createElement("div");
    categoriesAccordionNode.classList.add("accordion")
    const categoriesAccordionId = "categoriesAccordion"
    categoriesAccordionNode.id = categoriesAccordionId

    categoryObjectListWithProductListAttached.forEach(category => {
        const categoryHeaderID = `header-category-${category.id}`
        const categoryBodyID = `body-category-${category.id}`
        const categoryHeaderText = category.name
        const headerNode = createAccordionCollapseHeaderElement(categoryHeaderText, categoryBodyID, categoryHeaderID)
        categoriesAccordionNode.appendChild(headerNode)

        const dummyContentNode = document.createElement("div");
        dummyContentNode.innerHTML = category.name
        const productListNode = createProductListElement(category.productList)
        const bodyNode = createAccordionCollapseBodyElement(productListNode, categoryBodyID, categoryHeaderID, categoriesAccordionId)
        categoriesAccordionNode.appendChild(bodyNode)

    });

    return categoriesAccordionNode
}

const createAccordionCollapseHeaderElement = (headerText, idBody, idHeader) => {
    const accordionHeaderNode = document.createElement("h2");
    accordionHeaderNode.classList.add("accordion-header")
    accordionHeaderNode.id = idHeader

    const accordionHeaderButtonNode = document.createElement("button")
    accordionHeaderButtonNode.classList.add("accordion-button")
    accordionHeaderButtonNode.setAttribute("type", "button")
    accordionHeaderButtonNode.setAttribute("data-bs-toggle", "collapse")
    accordionHeaderButtonNode.setAttribute("data-bs-target", "#" + idBody)
    accordionHeaderButtonNode.setAttribute("aria-expanded", "true")
    accordionHeaderButtonNode.setAttribute("aria-controls", idBody)
    accordionHeaderButtonNode.innerHTML = headerText

    accordionHeaderNode.appendChild(accordionHeaderButtonNode)
    return accordionHeaderNode

}

const createAccordionCollapseBodyElement = (contentElementNode, idBody, idHeader, idAccordionParent) => {
    const accordionCollapseNode = document.createElement("div");
    accordionCollapseNode.classList.add("accordion-collapse")
    accordionCollapseNode.classList.add("collapse")
    accordionCollapseNode.classList.add("show")
    accordionCollapseNode.id = idBody
    accordionCollapseNode.setAttribute("aria-labelledby", idHeader)
    accordionCollapseNode.setAttribute("data-bs-parent", "#" + idAccordionParent)

    const accordionBodyNode = document.createElement("div");
    accordionBodyNode.classList.add("accordion-body")
    accordionBodyNode.appendChild(contentElementNode)

    accordionCollapseNode.appendChild(accordionBodyNode)

    return accordionCollapseNode
}


export const createCategoriesElement = createCategoriesAccordionElement