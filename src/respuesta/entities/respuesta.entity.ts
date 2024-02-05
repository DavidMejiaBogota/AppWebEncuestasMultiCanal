import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity} from "../../config/base.entity";
import { PreguntasEntity } from "../../pregunta/entities/pregunta.entity";

@Entity({name: "respuesta"})
export class RespuestaEntity extends BaseEntity {

    @Column()
    respuesta!: string;

    @ManyToOne(()=> PreguntasEntity, (pregunta)=> pregunta.respuestas)
    @JoinColumn({ name: "pregunta_id"})
    pregunta!: PreguntasEntity;
}