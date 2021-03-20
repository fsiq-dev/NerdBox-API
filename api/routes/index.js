const Router = require('express').Router()

const { name, version } = require('../../package.json');

Router
    .route('/')
    .get((req,res) => {
        res.send(`${name} - Version:${version}`)
    })

module.exports = Router;