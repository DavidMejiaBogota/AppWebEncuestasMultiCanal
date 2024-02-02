import { Column, Entity } from "typeorm";
import { BaseEntity} from "../../config/base.entity";
import { Length, IsEmail } from "class-validator";

@Entity({name: "usuario_basico"})
export class UsuarioBasicoEntity extends BaseEntity {

    @Column()
    empresa!: string;

    @Column({nullable:true})
    cargo!: string;

    @Column({name: "email_empresa", nullable: true})
    @Length(5, 320, {message: 'La longitud del correo electronico debe ser de 5 a 320 caracteres'})
    @IsEmail({}, { message: 'Debe ser una dirección de correo electrónico válida' })
    emailEmpresa!: string;

    @Column({name: "telefono_empresa", nullable: true, length: 10,})
    telefonoEmpresa!: string;

    @Column({name: "movil_empresa", nullable: true, length: 10,})
    movilEmpresa!: string;

    @Column({name: "direccion_empresa", nullable: true})
    direccionEmpresa!: string;

    @Column({name: "ciudad_empresa", nullable: true})
    ciudadEmpresa!: string;

    @Column({name: "departamento_empresa", nullable: true})
    departamentoEmpresa!: string;

    @Column({name: "pais_empresa", nullable: true})
    paisEmpresa!: string;

    @Column({name: "estado_empresa", type: "boolean", default: true})
    estadoEmpresa!: boolean;
}