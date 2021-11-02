import mysql from "mysql"
import {
    readFileSync
} from "fs"

/**
 * If i am developing locally, I should create a file project/backend/models/secret.json
 * with a structure such as {"password": "somepassword"}
 */
const password = process.env.NODE_ENV == "devel" && JSON.parse(readFileSync(new URL('./secret.json',
    import.meta.url).pathname, 'utf8')).password
/**
 * Database initialization
 * it loads data from amazon aws or localhost depending of de development process
 */
console.log(process.env.NODE_ENV == "devel")

const pool = process.env.NODE_ENV == "devel" ?
    mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: password,
        database: 'bsale_test'
    }) :
    mysql.createPool({
        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        user: 'bsale_test',
        password: "bsale_test",
        database: 'bsale_test'
    })

/**
 * Returns a promise containing the result as an object or an array
 * the sql must be provided
 * @param {string} SQLQuery 
 * @returns Promise of the object with the database data
 */
export const getTableAsObjectPromise = (SQLQuery) =>
    new Promise((resolve, reject) => {
        pool.query(SQLQuery, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });