import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { Length, Matches } from "class-validator";


enum Genero {
    Masculino = 'Masculino',
    Femenino = 'Femenino',
}

@Entity({name:"user"})
export class userEntity extends BaseEntity {
    @Column()
    nombre!: string;

    @Column()
    apellido!: string;
    
    @Column({
        type: 'date',
        nullable: true,
    })
    fecha_nacimiento!: Date;
           
    @Column({
        type: 'varchar',
        length: 255,
        unique: true,
        nullable: false,
        primary: true,
    })
    email!: string;

    @Column({nullable: false})
    @Length(12, 255, { message: 'La contraseña debe tener entre 12 y 255 caracteres' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'La contraseña debe contener minúsculas, mayúsculas, números y caracteres especiales' })
    password!: string;
    
    @Column({
        type: 'varchar',
        length: 10,
    })
    movil1!: string;
 
    @Column({
        type: 'varchar',
        length: 10,
        nullable: true,
    })
    movil2!: string;
    
    @Column({
        type: 'varchar',
        length: 10,
        nullable: true,
    })
    telefono_fijo!: string;
    
    @Column({
        type: "enum",
        enum: Genero,
        nullable: true,
    })
    genero!: Genero;
    
    @Column({
        type: 'varchar',
        nullable: true,
    })
    direccion!: string;

    @Column({nullable: true})
    ciudad!: string;

    @Column({nullable: true})
    departamento!: string;

    @Column({nullable: true})
    pais!: string;
    
    @Column({
        type: "boolean",
        default: true
    })
    estado!: boolean;

};