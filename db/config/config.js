require('dotenv').config();
// module.exports = {

//   "development": {
//     "username": process.env.DB_USER,
//     "password": process.env.DB_PASS,
//     "database": process.env.DB_DATABASE,
//     "host": process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT
//   },
//   "production": {
//     "username": process.env.DB_USER,
//     "password": process.env.DB_PASS,
//     "database": process.env.DB_DATABASE,
//     "host": process.env.DB_HOST,
//     "dialect": "postgres",
//     "dialectOptions": {
//       "ssl": { rejectUnauthorized: false }
//     }
//   }
// }

module.exports = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: false,
  dialectOptions: {
    ssl: { rejectUnauthorized: false }
  }
};
