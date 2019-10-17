import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';
import { ctts } from '../../util/constants';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) { }

  @UseGuards(AuthGuard(ctts.keys.strategyLocalName))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

}
