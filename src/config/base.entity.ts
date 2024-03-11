import {  CreateDateColumn, IntegerType, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    
    @PrimaryGeneratedColumn({type: 'int'})
    id!: number;

    @CreateDateColumn({
        name: "created_at",
        type: "timestamp", //Para traer el dato compelto de año-mes-dia:horas:minuto:segundos
    })
    createAt!: Date;

    @UpdateDateColumn({
        name: "update_at",
        type: "timestamp", //Para traer el dato compelto de año-mes-dia:horas:minuto:segundos
    })
    updateAt!: Date;
};