import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { CreateSkillsDto } from 'src/dto/createSkills.dto';
import { Skills } from 'src/entities/skills.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(User) 
      private readonly userRepository: Repository <User>, 
      @InjectRepository(Skills)  
      private readonly skillRepository: Repository <Skills>
    ){}

  // add user
  createUser(user:CreateUserDto){
    const newUser =  this.userRepository.create(user)
    this.userRepository.save(newUser)
    return newUser   
  }

  // add skills
  createSkill(skill:CreateSkillsDto, user:User){
    const newSkill =  this.skillRepository.create({
      ...skill,
      user: user
    })
    this.skillRepository.save(newSkill)
   return newSkill  
}

  getAllSkills() {
    return this.userRepository.find({ relations: ['skill']});
  }

  // getAllUser(){
  //   return this.skillRepository.find()
  // }

}
