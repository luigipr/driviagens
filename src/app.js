import  express  from "express";
import "express-async-errors"
import cors from 'cors';
import dotenv from "dotenv"
import router from "./routes/router.js";
import errorHandler from "./middlewares/error-middleware.js"



//criando a api
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();

app.use(router)
app.use(errorHandler)

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`))