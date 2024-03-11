import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { PreguntasEntity } from "../../pregunta/entities/pregunta.entity";
import { OpcionRespuestaCerradaEntity } from "../../opcionRespuestaCerrada/entities/OpcionRespuestaCerrada.entity";

//Se define la entidad ReespuestaEntity
@Entity({name: "respuesta"})
export class RespuestaEntity extends BaseEntity {

    @Column()
    respuesta!: string;

    @ManyToOne(()=> PreguntasEntity, (pregunta)=> pregunta.respuestas)
    @JoinColumn({ name: "pregunta_id"})
    pregunta!: PreguntasEntity;

    @OneToMany(() => OpcionRespuestaCerradaEntity, (opcion) => opcion.respuesta)
    opcionesCerradas!: OpcionRespuestaCerradaEntity[];
};