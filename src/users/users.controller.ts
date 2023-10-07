import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserId } from 'src/decorators/user-id.decorator';
import { UpdateUserDto } from './dto/update-user.dto';

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

  @Get('byEmail/:email')
  @ApiParam({ name: 'email', type: String })
  @UseGuards(JwtAuthGuard)
  async getByEmail(@Param() params: { email: string }) {
    const user = await this.usersService.findByEmail(params.email);

    if (!user) {
      return null;
    }
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  @UseGuards(JwtAuthGuard)
  async getUser(@Param() params: { id: number }) {
    const user = await this.usersService.findById(params.id);
    if (!user) {
      return null;
    }
    return {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      github: user.github,
      role: user.role,
    };
  }

  @Post(':id')
  @ApiParam({ name: 'id', type: Number })
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @Param() params: { id: number },
    @Body() dto: UpdateUserDto,
  ) {
    const user = await this.usersService.update(params.id, dto);
    return {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      github: user.github,
      role: user.role,
    };
  }
}
