import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService
  ) { }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.usuarioService.obtenerUsuarioPorUserName(username);
    const passwordValid = await bcrypt.compare(password, user.password);
    if (user && passwordValid) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.userName, sub: user._id };
    const token = this.jwtService.sign(payload);
    const response = {
      userName: user.userName,
      _id: user._id,
      token: token
    }
    return response;
  }

}
