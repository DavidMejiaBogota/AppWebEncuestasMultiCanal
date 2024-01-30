import {  CreateDateColumn, IntegerType, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @CreateDateColumn({
        name: "created_ad",
        type: "timestamp", //Para traer el dato compelto de año-mes-dia:horas:minuto:segundos
    })
    createAd!: Date;

    @UpdateDateColumn({
        name: "update_ad",
        type: "timestamp", //Para traer el dato compelto de año-mes-dia:horas:minuto:segundos
    })
    updateAd!: Date;
}

