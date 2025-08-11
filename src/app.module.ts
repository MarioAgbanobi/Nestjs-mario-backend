import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [UserModule, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
