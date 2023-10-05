import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local.guard';
import { LoginDto } from 'src/users/dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: LoginDto })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('/register')
  register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }
}
