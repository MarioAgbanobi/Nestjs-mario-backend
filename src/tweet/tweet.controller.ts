import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
    constructor(private tweetSerivce: TweetService) {}

    @Get()
    public GetTweets() {
        return this.tweetSerivce.getTweets();
    }

    @Get(':userid')
    public GetTweetsById(@Param('userid', ParseIntPipe) userid: number) {
        return this.tweetSerivce.getTweetsById(userid);
    }
}
