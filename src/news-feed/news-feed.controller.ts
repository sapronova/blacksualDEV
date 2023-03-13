import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateNewsPostDto } from './dto/create-news-post.dto';
import { NewsFeedService } from './news-feed.service';

@Controller('news-feed')
export class NewsFeedController {
  constructor(private newsFeedService: NewsFeedService) {}

  @Post()
  @UseInterceptors(FileInterceptor('cover'))
  createPost(@Body() dto: CreateNewsPostDto, @UploadedFile() cover) {
    return this.newsFeedService.createPost(dto, cover);
  }
}
