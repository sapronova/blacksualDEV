import { Module } from '@nestjs/common';
import { NewsFeedService } from './news-feed.service';
import { NewsFeedController } from './news-feed.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { NewsFeedPost } from './news-feed.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [NewsFeedService],
  controllers: [NewsFeedController],
  imports: [SequelizeModule.forFeature([User, NewsFeedPost]), FilesModule],
})
export class NewsFeedModule {}
