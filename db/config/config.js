const node_environment = process.env.NODE_ENV || 'development'

if (node_environment === 'development') {

  require('dotenv').config();

}
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: "postgres",
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialectOptions: {
    ssl: { rejectUnauthorized: false }
  }
}
// module.exports = {
//   "development": {
//     "username": process.env.DB_USER,
//     "password": process.env.DB_PASS,
//     "dialect": "postgres",
//     "database": process.env.DB_DATABASE,
//     "host": process.env.DB_HOST,
//   },
//   "production": {
//     "username": process.env.DB_USER,
//     "password": process.env.DB_PASS,
//     "dialect": "postgres",
//     "database": process.env.DB_DATABASE,
//     "host": process.env.DB_HOST,
//     "dialectOptions": {
//       "ssl": { rejectUnauthorized: false }
//     }
//   }
// }