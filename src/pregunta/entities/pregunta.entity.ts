import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { EncuestaEntity } from "../../encuesta/entities/encuesta.entity";

@Entity({name: "pregunta"})
export class PreguntasEntity extends BaseEntity{
 
    @Column()
    enunciado!: string;
    
    @ManyToOne(()=> EncuestaEntity, (encuesta) => encuesta.preguntas)
    @JoinColumn({name: "encuesta_id"})
    encuesta!:EncuestaEntity;
}