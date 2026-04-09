import {Request, Response} from "express"
import { AppDataSource } from "../config/data-source"
import { User } from "../model/User"

export class UserController{
    public userRepo = AppDataSource.getRepository(User)

    async list (req:Request, res: Response){
        const user = await this.userRepo.find({relations:["post"]})
        res.status(200).json(user)
        return
    }

    async create(req:Request, res:Response) {

        const {name, email} = req.body
            const user = this.userRepo.create({name, email})
            await this.userRepo.save(user)

        res.status(201).json(user)
        return
    }
}