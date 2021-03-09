//IMPORTS
const express = require('express');
const userRoute = require('./routes/user');
//CONFIGS
const app = express();

//middleware
app.use(express.json())
app.use('/v1', userRoute);

const PORT = process.env.PORT || 3355;
app.listen(PORT, () =>{console.log(`SERVER RUNING ON: http://localhost:${PORT} `)});
