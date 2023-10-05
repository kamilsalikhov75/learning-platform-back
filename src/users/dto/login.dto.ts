import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    default: 'test@mail.ru',
  })
  email: string;

  @ApiProperty({
    default: '123456',
  })
  password: string;
}
