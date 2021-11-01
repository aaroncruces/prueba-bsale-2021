import express from "express"
import {getProductListPromise,getProductListPromiseByCategoryId} from "./models/products.js"
import {getCategoryListPromise,getCategoryPromise} from "./models/categories.js"
//import { products } from "./models/products.js"

const apiRouter = express.Router();
const app = express()
app.use(express.static('frontend'));
app.get("/api/products", async(req, res) => {
    try {
        const resultElements = await getProductListPromise();
        res.status(200).json(resultElements);
    } catch (e) {
        res.sendStatus(500);
    }
})
app.get("/api/products/category/:categoryId", async(req, res) => {
    try {
        const resultElements = await getProductListPromiseByCategoryId(req.params.categoryId);
        res.status(200).json(resultElements);
    } catch (e) {
        res.sendStatus(500);
    }
})

/**
 * todo:
 * validate params
 */
 app.get("/api/categories/:categoryId", async (req, res) => {
    try {
        const resultElements = await getCategoryPromise(req.params.categoryId);
        res.status(200).json(resultElements);
    } catch (e) {
        res.sendStatus(500);
    }
})

app.get("/api/categories", async (req, res) => {
    try {
        const resultElements = await getCategoryListPromise();
        res.status(200).json(resultElements);
    } catch (e) {
        res.sendStatus(500);
    }
})

app.listen(3000)