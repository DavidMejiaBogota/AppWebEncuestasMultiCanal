import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
import { Genero } from "../../enums/enums";

export class UserDTO extends BaseDTO {
    
    @IsNotEmpty()
    nombre!: string;

    @IsNotEmpty()
    apellido!: string;
    
    @IsNotEmpty()
    fecha_nacimiento!: Date;
           
    @IsNotEmpty()
    email!: string;

    
    password!: string;
    
    @IsNotEmpty()
    movil1!: string;
 
    @IsNotEmpty()
    movil2!: string;
    
    @IsNotEmpty()
    telefono_fijo!: string;
    
    @IsNotEmpty()
    genero!: Genero;
    
    @IsNotEmpty()
    direccion!: string;

    @IsNotEmpty()
    ciudad!: string;

    @IsNotEmpty()
    departamento!: string;

    @IsNotEmpty()
    pais!: string;
    
    @IsNotEmpty()
    estado!: boolean;
}