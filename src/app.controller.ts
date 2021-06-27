import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

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
}
