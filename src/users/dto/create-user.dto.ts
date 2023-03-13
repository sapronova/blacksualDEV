import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'example@ex.com', description: 'User email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Email is not valid' })
  readonly email: string;

  @ApiProperty({ example: 'anypa***sss', description: 'User password' })
  @IsString({ message: 'Should be a string' })
  @Length(6, 14, {
    message: 'Password should contain at least 6 symbols and not more than 16',
  })
  readonly password: string;
}
