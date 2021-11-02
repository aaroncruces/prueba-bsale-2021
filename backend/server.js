import express from "express"
import cors from "cors"
import {
    getProductListPromise,
    getProductListPromiseByCategoryId,
    filterProductListByName
} from "./models/products.js"
import {
    getCategoryListPromise,
    getCategoryPromise
} from "./models/categories.js"


const app = express()
app.use(express.static('frontend/public'));
process.env.NODE_ENV=="devel" && app.use(cors());

/**
 * Obtains all the products as a json object
 */
app.get("", async (req, res) => {
    try {
        const resultElements = await getProductListPromise();
        res.status(200).json(resultElements);
    } catch (e) {
        res.status(500).sendFile("500.html", {
            root: "frontend/exceptions"
        });
    }
})
/**
 * Obtains all the products with some search parameter
 * For now it is defined as name, but others can be implemented
 */
 app.get("/api/products/search", async (req, res) => {
    try {
        console.log("0- try");
        let filteredProducts = await getProductListPromise();
        console.log("1- got all products");
        console.log("2- parameter:"+ JSON.stringify(req.query));
        //only name is implemented
        if (req.query.name) 
        filteredProducts=filterProductListByName(req.query.name,filteredProducts);
        console.log("3- filtered:");

        res.status(200).json(req.query);
        res.status(200).json(filteredProducts);
    } catch (e) {
        // res.status(500).sendFile("500.html", {
        //     root: "frontend/exceptions"
        // });git push -u origin master 
    }
})

/**
 * Obtains all the products belonging to a category
 */
app.get("/api/products/category/:categoryId", async (req, res) => {
    try {
        const resultElements = await getProductListPromiseByCategoryId(req.params.categoryId);
        res.status(200).json(resultElements);
    } catch (e) {
        res.status(500).sendFile("500.html", {
            root: "frontend/exceptions"
        });
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
        res.status(500).sendFile("500.html", {
            root: "frontend/exceptions"
        });
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
        res.status(500).sendFile("500.html", {
            root: "frontend/exceptions"
        });
    }
})

/**
 * 404 error handling
 */
app.get("*", async (req, res) => {
    res.status(404).sendFile("404.html", {
        root: "frontend/exceptions"
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if (err) throw err;
    console.log("%clistening on "+PORT, "color: green");
});