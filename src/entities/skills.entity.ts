import { Column, Entity, PrimaryGeneratedColumn,OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Skills{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({nullable:true})
    public skills: string;


    @ManyToOne(() => User, user=> user.skill,{
        eager: true,
        cascade:true
      })
    @JoinColumn({name:'user_id'})
    public user: User;


    
}