import express, {Application} from "express";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";
import router from "./route";

const app:Application = express()
const PORT: number = 3000

app.use(express.json())

AppDataSource.initialize().then(()=>{
    console.log("banco conenctado")
    app.use(router)
    app.listen(PORT, ()=>{
        console.log(`server rodando na porta ${PORT}`)
    })
}). catch((err) => console.error("erro ao conenctar", err))
