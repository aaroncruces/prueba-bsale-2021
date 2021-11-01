import mysql from "mysql"

/**
 * Database initialization
 */
const pool = mysql.createPool({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: "bsale_test",
    database: 'bsale_test'
});

/**
 * Returns a promise containing the result as an object or an array
 * the sql must be provided
 * @param {string} SQLQuery 
 * @returns Promise of the object with the database data
 */
 export const getTableAsObjectPromise=(SQLQuery)=>
     new Promise((resolve, reject) => {
        pool.query(SQLQuery, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
