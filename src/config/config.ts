import * as dotenv from 'dotenv';
import {DataSource} from "typeorm";
import { AppDataSource } from './data.source';

export abstract class ConfigServer {
    constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv.config({
            path: nodeNameEnv,
        });
    }

    //Función para leer las variables de entorno y define
    public getEnvironment(k: string): string | undefined {
        return process.env[k]
    }

    //Función para leer las variables de entorno y define un un número
    public getNumberEnv(k: string): number {
        return Number(this.getEnvironment(k));
    }

    public get nodeEnv(): string {
        return this.getEnvironment('NODE_ENV')?.trim() || "";
    }

    //Configuracón para poder leer uno u otro archivo .env
    public createPathEnv(path: string): string {
        const arrEnv: Array<string> = ["env"]

        if(path.length > 0) {
            const stringToArray = path.split('.');
            arrEnv.unshift(...stringToArray);
        }
        return '.' + arrEnv.join('.')
    }
    
    get initConnect(): Promise<DataSource> {
        return AppDataSource.initialize();
    }
};