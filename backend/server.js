import express from "express"
import getProductListPromise from "./models/products.js"
import getCategoryListPromise from "./models/categories.js"
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
app.get("/api/categories", async (req, res) => {
    try {
        const resultElements = await getCategoryListPromise();
        res.status(200).json(resultElements);
    } catch (e) {
        res.sendStatus(500);
    }
})
app.listen(3000)