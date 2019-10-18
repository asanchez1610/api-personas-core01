import { ApiModelProperty } from '@nestjs/swagger';

export class TipoDocumentoDto {
    
    @ApiModelProperty({ description: 'descripcion del tipo de documento'})
    descripcion: string;

    @ApiModelProperty({ description: 'codigo unico del tipo de documento'})
    codigo: string;
}