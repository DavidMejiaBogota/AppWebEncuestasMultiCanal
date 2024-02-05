import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity} from "../../config/base.entity";
import { UsuarioBasicoEntity } from "../../usuariobasico/entities/usuariobasico.entity";
import { PreguntasEntity } from "../../pregunta/entities/pregunta.entity";

@Entity('encuesta')
export class EncuestaEntity extends BaseEntity{
    @Column({name: "nombre_encuesta"})
    nombreEncuesta!: string;

    @Column({name: "objetivo_encuesta"})
    objetivoEncuesta!: string;

    @Column({name: "fecha_cierre_encuesta", type: "date", nullable: true})
    fechaCierreEncuesta!: Date;

    @Column({name: "estado_encuesta", type: "boolean", default: true})
    estadoEncuesta!: boolean

    @ManyToOne(()=>UsuarioBasicoEntity, (usuario_basico)=>usuario_basico.encuestas, {onDelete: "CASCADE"})
    @JoinColumn({name:'usuario_basico_id'})
    usuario_basico!:UsuarioBasicoEntity;
    preguntas!: PreguntasEntity[];
}