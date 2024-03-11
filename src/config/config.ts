import * as dotenv from 'dotenv';
import {DataSource, DataSourceOptions, createConnection} from "typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

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
            const sringToArray = path.split('.');
            arrEnv.unshift(...sringToArray);
        }
        return '.' + arrEnv.join('.')
    }

    //Configuracón de typeORM para conectar a la base de datos.
    public get typeORMConfig(): DataSourceOptions {
        return {//Se configuran las variables de entorno
            type: "mysql",
            host: this.getEnvironment('DB_HOST'),
            port: this.getNumberEnv('DB_PORT'),
            username: this.getEnvironment('DB_USER'),
            password: this.getEnvironment('DB_PASSWORD'),
            database: this.getEnvironment('DB_DATABASE'),
            //Se configura la lectura de entidades
            entities: [__dirname + "/../**/*.entity{.ts,.js}"],
            migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
            synchronize: true,
            logging: false,
            namingStrategy: new SnakeNamingStrategy(),
        };  
    }

    async dbConnect(): Promise<DataSource> {
        return await createConnection(this.typeORMConfig);
    }
};