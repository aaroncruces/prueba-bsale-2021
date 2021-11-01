import express from "express"
import {getProductListPromise,getProductListPromiseByCategoryId} from "./models/products.js"
import {getCategoryListPromise,getCategoryPromise} from "./models/categories.js"

const app = express()
app.use(express.static('frontend/public'));

/**
 * Obtains all the products as a json object
 */
app.get("/api/products", async(req, res) => {
    try {
        const resultElements = await getProductListPromise();
        res.status(200).json(resultElements);
    } catch (e) {
        res.status(500).sendFile("500.html",{root:"frontend/exceptions"});
    }
})

/**
 * Obtains all the products belonging to a category
 */
app.get("/api/products/category/:categoryId", async(req, res) => {
    try {
        const resultElements = await getProductListPromiseByCategoryId(req.params.categoryId);
        res.status(200).json(resultElements);
    } catch (e) {
        res.status(500).sendFile("500.html",{root:"frontend/exceptions"});
    }
})

/**
 * Obtains a category by id
 */
 app.get("/api/categories/:categoryId", async (req, res) => {
    try {
        const resultElements = await getCategoryPromise(req.params.categoryId);
        res.status(200).json(resultElements);
    } catch (e) {
        res.status(500).sendFile("500.html",{root:"frontend/exceptions"});
    }
})

/**
 * Obtains all the categories as a json object
 */
app.get("/api/categories", async (req, res) => {
    try {
        const resultElements = await getCategoryListPromise();
        res.status(200).json(resultElements);
    } catch (e) {
        res.status(500).sendFile("500.html",{root:"frontend/exceptions"});
    }
})

/**
 * 404 error handling
 */
app.get("*", async (req, res) => {
    res.status(404).sendFile("404.html",{root:"frontend/exceptions"});
})

app.listen(80, () => {
    console.log("listening")
  })