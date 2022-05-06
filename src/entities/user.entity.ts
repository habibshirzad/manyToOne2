import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Skills } from "./skills.entity";
import { JoinColumn, OneToOne, OneToMany } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    public id: number

    @Column({nullable: true})
    public name: string

    @OneToMany(() => Skills,  skill => skill.user)
    public skill: Skills[];
    
}