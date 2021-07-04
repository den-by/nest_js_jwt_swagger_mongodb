import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('me')
  getMe(): string {
    return 'me';
  }

  @Post('sinup')
  postSignup(): string {
    return 'sinup';
  }

  @Post('singin')
  postSignin(): string {
    return 'singin';
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
