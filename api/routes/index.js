const Router = require('express').Router()

const { name, version } = require('../../package.json');

const usersRoutev1 = require('./v1/users');

Router
    .route('/')
    .get((req,res) => {
        res.send(`${name} - Version:${version}`)
    })

usersRoutev1(Router);

module.exports = Router;