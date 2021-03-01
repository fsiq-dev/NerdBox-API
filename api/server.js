//Import
import cors from 'cors';
import express from 'express';
import routes from './routes/routes.js';

//Config
const app = express();
const PORT = process.env.PORT || 3307

//Middleware
app.use(express.json());
app.use(cors());
//Routes
app.use('/', routes)
//start
app.listen(PORT,()=>{console.log(`SERVER RUNNING ON http://localhost:${PORT}`);})

export default app;