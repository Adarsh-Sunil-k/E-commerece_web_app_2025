import express from 'express'
import colors from 'colors'
import serverConfig from './config/serverConfig.js';
import morgan from 'morgan'
import dbConnection from './config/dbCOnfig.js';
import apiRouter from './routes/index.js';
import cors from 'cors'

dbConnection();
const app = express();
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use("/api",apiRouter)

app.get('/', (req, res)=> {
    res.send('<h1>Welcopme to ecommerce app</h1>')
})

app.listen(serverConfig.port,()=>{
    console.log(`Server Running On ${serverConfig.port}`.bgCyan.white);
    
})