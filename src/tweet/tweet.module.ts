import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';

@Module({
  controllers: [TweetController]
})
export class TweetModule {}
