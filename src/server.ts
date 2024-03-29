import { DataSource } from 'typeorm';
//Confugración y levantamiento del servidor con Class al estilo TypeScript.

//Llamado de dependicias para el server
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './user/user.router';
import { ConfigServer } from './config/config';

//Clase de servidor inicial
class ServerBootstrap extends ConfigServer {
    public app: express.Application = express()//App a demas del tipado va a tener toda la configuración real;
    private port: number= this.getNumberEnv('PORT');
    
    //Llamado a la ejecución del método constructor
    constructor(){
        //Se configura los métodos necesarios para el servidor funcione corretamente
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.dbConnect();
        this.app.use(morgan('dev'));
        this.app.use(cors());
        
        this.app.use('/api', this.routers());
        this.listen(); //Se llama a listen y se ejecuta (se levanta el servidor)
    };

    routers(): Array<express.Router>{
        return [new UserRouter().router];
    }

    async dbConnect(): Promise<DataSource | void> {
        return this.initConnect.then(() => {
            console.log("Connect Success")
        }).catch((err) =>{
            console.error(err);
        })
    };

    public listen() {
        this.app.listen(this.port, ()=>{
            console.log(`Sever listening on port ${this.port}`);
        });
    }

}

new ServerBootstrap(); //Se ejecuta la clase y que sepa que ejecutar por dentro.