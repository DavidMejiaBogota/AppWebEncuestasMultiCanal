import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { EncuestaEntity } from "../../encuesta/entities/encuesta.entity";
import { RespuestaEntity } from "../../respuesta/entities/respuesta.entity";

export enum TipoRespuesta {
    Abierta = "Abierta",
    Cerrada = "Cerrada",
}

@Entity({name: "pregunta"})
export class PreguntasEntity extends BaseEntity{
 
    @Column()
    enunciado!: string;
    
    @Column({type: "enum", enum: TipoRespuesta, default: TipoRespuesta.Abierta})
    TipoRespuesta!: TipoRespuesta;

    @ManyToOne(()=> EncuestaEntity, (encuesta) => encuesta.preguntas)
    @JoinColumn({name: "encuesta_id"})
    encuesta!:EncuestaEntity;

    @OneToMany(()=> RespuestaEntity, (respuesta) => respuesta.pregunta)
    respuestas!: RespuestaEntity[];
}