import { Column, Entity } from "typeorm";
import { BaseEntity } from "../config/base.entity";


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
        nullable: true,
    })
    fecha_nacimiento!: Date;
    
    @Column()
    direccion!: string;
    
    @Column({
        type: 'varchar',
        length: 255,
        unique: true,
        nullable: false,
        primary: true,
    })
    email!: string;
    
    @Column()
    movil1!: string;
 
    @Column()
    movil2!: string;
    
    @Column()
    telefono_fijo!: string;
    
    @Column({
        type: "enum",
        enum: Genero,
    })
    genero!: Genero;
    
    @Column()
    estado!: number;

};