import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getMe(@UserId() id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.usersService.findById(id);
    return user;
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  @UseGuards(JwtAuthGuard)
  async getUser(@Param() params: { id: number }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await this.usersService.findById(params.id);
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      github: user.github,
    };
  }
}
