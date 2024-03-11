/**
Cada uno de los modulos contará con un DTO para validar la información que va a entrar a cada entidad
 */

import { IsDate, IsOptional, IsUUID } from "class-validator";

export class BaseDTO {
    
    @IsUUID()
    @IsOptional()
    id!: number;

    @IsDate()
    @IsOptional()
    createAd!: Date;

    @IsDate()
    @IsOptional()
    updateAd!: Date;
};

/**
 * La clase BaseDTO creada es una clase de Transferencia de Datos
 *  (DTO, por sus siglas en inglés) en TypeScript. 
 * Los DTOs son objetos que transportan datos entre capas de una aplicación, generalmente entre
 * el cliente y el servidor. Estos objetos se utilizan para definir la estructura de los datos 
 * que se envían entre diferentes partes del sistema.

 * Ahora, veamos detalladamente cada parte de la clase BaseDTO:

 * @IsUUID(): Este decorador de validación de class-validator indica que el campo id
 * debe ser un UUID válido. Un UUID es un identificador único universal.

 * @IsDate(): Estos decoradores aseguran que los campos createAd y updateAd sean instancias
 * válidas de la clase Date. Garantizan que estos campos contengan valores de fecha.

 * @IsOptional(): Este decorador de class-validator especifica que los campos decorados
 * pueden ser opcionales, lo que significa que no son obligatorios.
 * Permite que estos campos estén ausentes en instancias de la clase BaseDTO sin generar errores
 * de validación.

 * En resumen, la clase BaseDTO se utiliza para definir un objeto que puede transportar datos
 * relacionados con identificación (UUID), creación y actualización de fechas.
 * Además, gracias a los decoradores de validación, se asegura que los datos proporcionados
 * cumplan con ciertos criterios, como ser un UUID válido y fechas válidas.
 * Este tipo de clases son comunes en arquitecturas basadas en DTO para estructurar y validar datos
 * que se transfieren entre diferentes partes de una aplicación.
 */