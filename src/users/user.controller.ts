import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        // return 'You made a GET request to get all users!'
        const UserService = new UsersService();
        return UserService.getAllUsers();
    }
    @Get(':id')
    getUserById(@Param('id') id: any){
        // console.log(id);
        const UserService = new UsersService();
        return UserService.getUserById(+id);
    }
    @Post()
    createUsers(){
        // return 'You made a POST request!'
        const user = {id: 3, name: 'mary', age: 23, gender: 'female', isMarried: false};

        const UserService = new UsersService();
        UserService.createUser(user);
        return 'A new user has been created!';
    }
    @Put()
    updateUsers(){
        return 'You made a PUT request!'
    }
    @Delete()
    deleteUsers(){
        return 'You made a DELETE request!'
    }


}