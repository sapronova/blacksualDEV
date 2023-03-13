import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateNewsPostDto } from './dto/create-news-post.dto';
import { NewsFeedPost } from './news-feed.model';

@Injectable()
export class NewsFeedService {
  constructor(
    @InjectModel(NewsFeedPost)
    private newsFeedPostRepository: typeof NewsFeedPost,
    private fileService: FilesService,
  ) {}

  async createPost(dto: CreateNewsPostDto, cover: any) {
    const fileName = await this.fileService.createFile(cover);
    const post = await this.newsFeedPostRepository.create({
      ...dto,
      cover: fileName,
    });
    return post;
  }
}
