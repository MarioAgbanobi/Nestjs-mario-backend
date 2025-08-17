import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet-dto';

@Controller('tweets')
export class TweetController {
    constructor(private tweetSerivce: TweetService) {}

    @Get()
    GetTweets() {
        return this.tweetSerivce.getTweets();
    }

    @Get(':userid')
    public GetTweetsById(@Param('userid', ParseIntPipe) userid: number) {
        return this.tweetSerivce.getTweetsById(userid);
    }

    @Post()
    public CreateTweet(@Body() tweet: CreateTweetDto) {
        return this.tweetSerivce.createTweet(tweet);
    }
}
