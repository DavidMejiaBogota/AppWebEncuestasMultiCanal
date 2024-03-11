import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { RespuestaEntity } from "../../respuesta/entities/respuesta.entity";
import { PreguntasEntity } from "../../pregunta/entities/pregunta.entity";

@Entity({name: "opcion_respuesta_cerrada"})
export class OpcionRespuestaCerradaEntity extends BaseEntity {
    @Column()
    valor!: string;

    @ManyToOne(()=> RespuestaEntity, (respuesta)=> respuesta.opcionesCerradas)
    @JoinColumn({name: "respuesta_id"})
    respuesta!: RespuestaEntity;

    @ManyToOne(()=> PreguntasEntity, (pregunta)=> pregunta.opcionesCerradas)
    @JoinColumn({name: "pregunta_id"})
    pregunta!: PreguntasEntity;

};