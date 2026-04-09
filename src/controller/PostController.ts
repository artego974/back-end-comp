import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Post } from "../model/Post";
import { User } from "../model/User";

export class PostController{
    private postRepo = AppDataSource.getRepository(Post)
    private usertRepo = AppDataSource.getRepository(User)

    async create(req:Request, res: Response){
        const { title, userId} = req.body
        const user = await this.usertRepo.findOneBy({id:userId})
        if(!user) return res.status(404).json({message: "user not found"})

        const post = this.postRepo.create({title,user})
        await this.postRepo.save(post)
        return res.status(201).json
    }

    

}