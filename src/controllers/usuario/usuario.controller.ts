import { Controller, Post, Body, Get, UseGuards, Delete, Param } from '@nestjs/common';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { AuthGuard } from '@nestjs/passport';
import { ctts } from '../../util/constants';

@Controller('usuarios')
@UseGuards(AuthGuard(ctts.keys.strategyJwtName))
export class UsuarioController {

    constructor(
        private readonly usuarioService: UsuarioService
    ) {}

   @Post()
   async crearUsuario(@Body() usuario) {
       return await this.usuarioService.crearUsuario(usuario); 
   } 

   @Get()
   async listarUsuario() {
       let usuarios = await this.usuarioService.listarUsuarios();
       return { data: usuarios };
   }

   @Delete(':id')
   async eliminarUsuario(@Param() params) {
        const usuarioEliminado = await this.usuarioService.eliminarUsuario(params.id);
        return { data: usuarioEliminado }
   }

}
