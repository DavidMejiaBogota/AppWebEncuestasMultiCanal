import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../config/base.entity";


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
        nullable: true,
    })
    direccion!: string;
    
    @Column({
        type: 'varchar',
        length: 255,
        unique: true,
        nullable: false,
        primary: true,
    })
    email!: string;
    
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
        type: "boolean",
        default: true,
    })
    estado!: boolean;

};