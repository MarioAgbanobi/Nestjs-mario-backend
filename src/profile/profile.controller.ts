import { Controller, Get, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileController {
    constructor(private readonly profileService: ProfileService){}

    @Get()
    public getProfiles(){
        return this.profileService.getAllProfiles();
    }    
}
