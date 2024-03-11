import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
import { Genero } from "../../enums/enums";

export class UserDTO extends BaseDTO {
    
    @IsNotEmpty()
    nombre!: string;

    @IsNotEmpty()
    apellido!: string;
    
    @IsOptional()
    fecha_nacimiento!: Date;
           
    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    password!: string;
    
    @IsOptional()
    movil1!: string;
 
    @IsOptional()
    movil2!: string;
    
    @IsOptional()
    telefono_fijo!: string;
    
    @IsOptional()
    genero!: Genero;
    
    @IsOptional()
    direccion!: string;

    @IsOptional()
    ciudad!: string;

    @IsOptional()
    departamento!: string;

    @IsOptional()
    pais!: string;
    
    @IsOptional()
    estado!: boolean;
};