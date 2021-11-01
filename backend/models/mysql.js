import mysql from "mysql"
import password from "./secret.js"
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'bsale_test'
});

/**
 * Returns a promise containing the result as an object
 * @param {string} SQLQuery 
 * @returns Promise of the object with the database data
 */
const getTableAsObjectPromise=(SQLQuery)=>
     new Promise((resolve, reject) => {
        pool.query(SQLQuery, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });

export default getTableAsObjectPromise