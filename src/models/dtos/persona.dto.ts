import { ApiModelProperty } from '@nestjs/swagger';
export class PersonaDto {
    @ApiModelProperty({ description: 'id de la persona' })
    id: string;

    @ApiModelProperty({ description: 'nombre completo' })
    nombres: string;

    @ApiModelProperty({ description: 'apellido paterno y materno' })
    apellidos: string;

    @ApiModelProperty({ description: 'telefono de la persona' })
    telefono: string;

    @ApiModelProperty({ description: 'correo electronico de la persona' })
    email: string;

    @ApiModelProperty({ description: 'numero de documento de identidad' })
    numeroDocumento: string;
}