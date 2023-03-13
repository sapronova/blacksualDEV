import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface NewsFeedPostAttrs {
  title: string;
  content: string;
  userId: number;
  cover: string;
}

@Table({ tableName: 'posts' })
export class NewsFeedPost extends Model<NewsFeedPost, NewsFeedPostAttrs> {
  @ApiProperty({ example: '1', description: 'Unique indentifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Spring Sale up to 50%', description: 'News Title' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: 'Buy clothes with discount till end of March',
    description: 'Post description',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;

  @ApiProperty({ example: '<image>', description: 'Post cover (image)' })
  @Column({
    type: DataType.STRING,
  })
  cover: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
