import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user-dto';

@Controller('users')
export class UsersController {
    usersService: UsersService;

    constructor() {
        this.usersService = new UsersService()
    }

  @Get(':isMarried')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param('isMarried', ParseBoolPipe) isMarried: boolean,
  ) {
    // return 'You made a GET request to get all users!'
    console.log(limit, page, isMarried);
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
  @Put()
  updateUsers() {
    return 'You made a PUT request!';
  }
  @Delete()
  deleteUsers() {
    return 'You made a DELETE request!';
  }
}
