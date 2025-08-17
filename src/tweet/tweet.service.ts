import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateTweetDto } from './dto/create-tweet-dto';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TweetService {
    constructor(
        private readonly userService: UsersService,
        @InjectRepository(Tweet) private readonly tweetRepository: Repository<Tweet>,
    ) {}

    getTweets(){
        return this.tweetRepository.find();
    }

    public async getTweetsById(userId: number){
        return await this.tweetRepository.find({ 
            where: { user: { id: userId } },
            relations: { user: true }
         });
    }

    public async createTweet(tweetDto: CreateTweetDto){
        //find user with the given userid from user table
        let user = await this.userService.findUsersById(tweetDto.userId);

        if (!user) {
            throw new Error('User not found');
        }

        //Create a tweet
        let tweet = await this.tweetRepository.create({...tweetDto, user: user})

        //Save the tweet
        return await this.tweetRepository.save(tweet);

    }

}
