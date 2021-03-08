const node_environment = process.env.NODE_ENV || 'development' 
if (node_environment === 'development') { require('dotenv').config(); }

module.exports = {
    database: process.env.DB_DATABASE,
    // database: 'SchemaDB',
    username: process.env.DB_USER,
    // username: 'UserDB',
    password: process.env.DB_PASS,
    // password: 'senhaDB',
    host: process.env.DB_HOST,
    // host: 'IPHOST',
    port: process.env.DB_PORT,
    // port: 'PORTA',
    dialect: process.env.DB_DIALECT,
    // dialect: 'tipoDoBanco',
    logging: false
};

