import { Column, Entity, Exclusion, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { Length, Matches } from "class-validator";
import { UsuarioBasicoEntity } from "../../usuariobasico/entities/usuariobasico.entity";
import { Exclude } from "class-transformer";
import { Genero } from "../../enums/enums";


@Entity({name:"user"})
export class UserEntity extends BaseEntity {
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

    @Exclude()  
    @Column({nullable: false})
    @Length(12, 255, { message: 'La contraseña debe tener entre 12 y 255 caracteres' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'La contraseña debe contener minúsculas, mayúsculas, números y caracteres especiales' })
    password!: string;
    
    @Column({
        type: 'varchar',
        length: 10,
        nullable: true,
        default: "0",
    })
    movil1!: string;
 
    @Column({
        nullable: true,
        type: 'varchar',
        length: 10,
        default: "0",
    })
    movil2!: string;
    
    @Column({
        type: 'varchar',
        length: 10,
        nullable: true,
        default: "0",
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
        default: "0",
    })
    direccion!: string;

    @Column({nullable: true, default: "0",})
    ciudad!: string;

    @Column({nullable: true, default: "0",})
    departamento!: string;

    @Column({nullable: true, default: "0",})
    pais!: string;
    
    @Column({
        type: "boolean",
        default: true, // o false según tus requisitos
        nullable: true,
    })
    estado!: boolean;

    @OneToOne(()=> UsuarioBasicoEntity, (usuario_basico)=> usuario_basico.user)
    usuario_basico!: UsuarioBasicoEntity;

};