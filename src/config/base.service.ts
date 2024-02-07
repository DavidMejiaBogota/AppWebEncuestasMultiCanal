import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ConfigServer } from "./config";

/**
 * Clase base para servicios que interactúan con entidades en la base de datos utilizando TypeORM.
 *
 * @template T - Tipo de entidad con la que trabaja el servicio.
 */

export class BaseService<T extends BaseEntity> extends ConfigServer {
    //Método publico
    
    //Repositorio de la entidad específica.
    //@type {Promise<Repository<T>>}
    public execRepository: Promise<Repository<T>>;
    //Métod constructor
    //Constructor de la clase BaseService.
    //@param {EntityTarget<T>} getEntity - Entidad con la que se trabajará.
    constructor(private getEntity: EntityTarget<T>){
        super();
        this.execRepository = this.initRepository(getEntity);
    }

    //Método para inicializar el repositorio
    //Inicializa el repositorio para la entidad dada.
    //@param {EntityTarget<T extends ObjectLiteral>} entity - Entidad para la cual se inicializará el repositorio.
    //@returns {Promise<Repository<T>>} - Promesa que resuelve en el repositorio de la entidad.
    async initRepository<T extends ObjectLiteral>(entity: EntityTarget<T>): Promise<Repository<T>> {
        const getConn = await this.dbConnection(); //Llama la coneción a la base de datos
        return getConn.getRepository(entity);
    }
}

/**
La clase BaseService implementada tiene la función de proporcionar un servicio base para
interactuar con entidades en una base de datos utilizando TypeORM.
Aquí está una explicación detallada de cada parte:

Imports:
Importa las clases necesarias de TypeORM: EntityTarget, ObjectLiteral, y Repository.

Herencia:
Extiende la clase ConfigServer, indicando que BaseService hereda sus propiedades y métodos.
Atributo execRepository:

Declara un atributo público llamado execRepository, que es una promesa (Promise) de tipo Repository<T>. Esta promesa se inicializa en el constructor llamando al método initRepository con la entidad específica.

Constructor:
El constructor recibe un parámetro getEntity de tipo EntityTarget<T> que representa la entidad con
la que se trabajará.
Llama al constructor de la clase padre (super()) para inicializar las propiedades de la clase base
(ConfigServer).
Inicializa execRepository llamando al método initRepository con la entidad recibida.

Método initRepository:
Es un método asíncrono que toma una entidad de tipo EntityTarget<T> y devuelve una promesa de tipo
Repository<T>.
Utiliza el método dbConnection de la clase base (ConfigServer) para obtener la conexión a la base de
datos.
Luego, utiliza esta conexión para obtener el repositorio de la entidad especificada y lo retorna.
En resumen, la clase BaseService se encarga de gestionar la conexión a la base de datos, 
inicializar el repositorio para una entidad dada y proporcionar un servicio base para realizar
operaciones CRUD en esa entidad específica. Este tipo de clase es útil para centralizar la lógica
común de acceso a la base de datos en una aplicación que utiliza TypeORM.
 */