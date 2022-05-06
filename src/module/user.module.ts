import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user.controller';
import { Skills } from 'src/entities/skills.entity';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [TypeOrmModule.forFeature([User, Skills])],
  exports:[],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
