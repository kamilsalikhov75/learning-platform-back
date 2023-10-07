import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    default: 'test@mail.ru',
  })
  email?: string;

  @ApiProperty({
    default: 'Камиль',
  })
  firstName?: string;

  @ApiProperty({
    default: 'Салихов',
  })
  lastName?: string;

  @ApiProperty({
    default: '123456',
  })
  password?: string;

  @ApiProperty({
    default: 'kamilsalikhov75',
  })
  github?: string;

  @ApiProperty({
    default: 'skamils',
  })
  telegram?: string;
}
