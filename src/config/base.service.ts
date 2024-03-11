import { EntityTarget, Repository } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ConfigServer } from "./config";

export class BaseService<T extends BaseEntity> extends ConfigServer{
    /**
     * Esta clase está diseñada para manejar y ejecutar operaciones en un repositorio de
     * datos (Repository<T>) relacionado con una entidad específica (getEntity). 
     * El uso de Promesas sugiere operaciones asíncronas, comunes en programación asíncrona y 
     * manejo de promesas en JavaScript/TypeScript.
     */
    public execRepository: Promise<Repository<T>>;
    constructor(private getEntity: EntityTarget<T>) {
        super();
        this.execRepository = this.initRepository(getEntity);
    } 

    /**
     * 
     * Esta función asincrónica initRepository espera a que se establezca una conexión a la bd,
     * y luego devuelve el repositorio de TypeORM correspondiente a la entidad especificada. 
     * Este tipo de método es común en aplicaciones TypeScript con TypeORM para facilitar 
     * la creación y obtención de repositorios de entidades de manera genérica.
     */
    async initRepository<T extends BaseEntity>(entity: EntityTarget<T>): Promise<Repository<T>> {
        const getConn = await this.dbConnect(); //Conexión a la bd.
        return getConn.getRepository(entity);

    }
};

/**
 * La clase BaseService se utiliza para encapsular la lógica común de acceso a la base de datos 
 * y proporciona un repositorio TypeORM para la entidad especificada. 
 * La clase es una implementación genérica para servicios que manejan entidades.
 */