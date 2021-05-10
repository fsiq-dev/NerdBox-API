const node_environment = process.env.NODE_ENV || "development";

if (node_environment === "development") {
  require("dotenv").config();
}

// module.exports = {
//   database: process.env.DB_DATABASE,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: process.env.DB_DIALECT,
//   logging: false
// };

module.exports = {
  local: {
    username: "root",
    password: null,
    database: "database_dev",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  development: {
    username: "root",
    password: null,
    database: "database_dev",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    uri: process.env.DATABASE_URL,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOSTL,
    dialect: "postgres",
  },
};
