import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user-dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { UpdateUserDto } from './dtos/update-user-dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
        
    }

  @Get(':isMarried')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param: GetUserParamDto
  ) {
    // return 'You made a GET request to get all users!'
    console.log(limit, page, param);
    // if(query.gender) {
    //     return UserService.getAllUsers().filter(u => u.gender === query.gender);
    // }
    return this.usersService.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    // console.log(typeof id, id);
    return this.usersService.getUserById(+id);
  }
  @Post()
  createUser(@Body() user: CreateUserDto) {
    // return 'You made a POST request!'

    // const user = {id: 3, name: 'mary', email: 'mary@gmail.com', gender: 'female', isMarried: false};

    // const UserService = new UsersService();
    // UserService.createUser(user);
    console.log(user instanceof CreateUserDto);
    return 'A new user has been created!';
  }
  @Patch()
  updateUser(@Body() body: UpdateUserDto) {
    console.log(body)
    return 'User updated successfully!';
  }
  @Delete()
  deleteUsers() {
    return 'You made a DELETE request!';
  }
}
