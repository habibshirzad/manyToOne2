import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { CreateSkillsDto } from 'src/dto/createSkills.dto';
import { UserService } from '../service/user.service';
import { Skills } from 'src/entities/skills.entity';
import { User } from 'src/entities/user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

@Post('user')
createUser(@Body() createUserDto:CreateUserDto){
 return this.userService.createUser(createUserDto)
}

@Post('skill')
createSkill(@Body() createSkillDto:CreateSkillsDto){
  
  return this.userService.createSkill(createSkillDto,{ 
    name:'hhh',
    id:0,
    skill:[]
  })
}

@Get()
getAllSkills(){
  return this.userService.getAllSkills();
}

// @Get()
// getAllSkills() {
//   return this.userService.getAllSkills();
// }
}
