import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UsersService {
    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService){}

    users: {id: number, name: string, email: string, gender: string, isMarried: boolean, password: string}[] = [
        {id: 1, name: 'john', email: 'john@gmail.com', gender: 'male', isMarried: false, password: 'test1234'},
        {id: 2, name: 'mark', email: 'mark@gmail.com', gender: 'male', isMarried: true, password: 'test1234'},
        {id: 3, name: 'jane', email: 'jane@gmail.com', gender: 'female', isMarried: false, password: 'test1234'},
    ]


    getAllUsers() {
        if(this.authService.isAuthenticated){
            return this.users;
        }
        return "You are not logged-in";
    }

    getUserById(id: number) {
        const user = this.users.find(x => x.id === id);
        if (!user) {
            throw new Error(`User with ID ${id} not found`);
        }
        return user;
    }

    createUser(user: {id: number, name: string, email: string, gender: string, isMarried: boolean, password: string}) {
        this.users.push(user);
    }
}