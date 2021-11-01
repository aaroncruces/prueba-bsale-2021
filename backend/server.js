import express from "express"
import getProductListPromise from "./models/products.js"
//import { products } from "./models/products.js"

const apiRouter = express.Router();
const app = express()
app.use(express.static('frontend'));
app.get("/api/products", async(req, res) => {
    try {
        const resultElements = await getProductListPromise();
        res.status(200).json(resultElements); // send a json response
    } catch (e) {
        console.log(e); // console log the error so we can see it in the console
        res.sendStatus(500);
    }
})
app.get("/api/categories", (req, res) => {
    res.send("wip categories")
})
app.listen(3000)