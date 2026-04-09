import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import {Post} from "./Post"

@Entity("user")
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 255, nullable:false})
    name:string

    @Column({unique:true, length:255, nullable:false})
    email:string

    @OneToMany(()=> Post, post => post.user)
    posts: Post[]
    
}