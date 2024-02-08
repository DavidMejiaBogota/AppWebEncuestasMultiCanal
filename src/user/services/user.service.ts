import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { UserDTO } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";

 export class UserService extends BaseService<UserEntity> {
    constructor(){
        super(UserEntity);}
    
    /**
     * Se configura el servicio para trabajar con la entidad UserEntity y proporciona un método
     * asincrónico (findAllUser) para recuperar todos los usuarios almacenados en la base de datos
     * utilizando el repositorio asociado a la entidad UserEntity.
     */
    async findAllUser(): Promise<UserEntity[]>{
        return (await this.execRepository).find();
    }

/**
 * Esta función busca un usuario por su identificador en la base de datos y devuelve ese usuario
 * si se encuentra, o undefined si no se encuentra ningún usuario con el ID proporcionado.
 * La utilización de ! al final de la expresión:
 * wait (await this.execRepository).findOne({ where: { id } })!;
 * indica seguridad de que el resultado nunca será nulo.
 */
    async findUserById(id: number): Promise<UserEntity | undefined> {
        const result = await (await this.execRepository).findOne({ where: { id } })!;
        if (result === null) {
            return undefined;
        }
    }

    /**
     *la función createUser toma la información del usuario representada por el objeto body
     *(un objeto UserDTO), lo guarda en la base de datos utilizando el método save proporcionado
     *por this.execRepository, y luego devuelve el nuevo objeto del tipo UserEntity que representa
     *al usuario creado en la base de datos. Es una función asíncrona, el uso de async y await, 
     *así lo indica, ya que las operaciones de base de datos suelen ser operaciones asíncronas.
     */
    async createUser(body: UserDTO): Promise<UserEntity>{
        return (await this.execRepository).save(body);
    }

    /**
     *la función deleteUser toma la identificación de un usuario, utiliza el método delete
     *proporcionado por this.execRepository para eliminar el usuario correspondiente
     *en la base de datos y devuelve información sobre la operación de eliminación en forma
     *de un objeto DeleteResult. Es asíncronoa para manejar operaciones que pueden llevar tiempo,
     *como las interacciones con la base de datos, sin bloquear la ejecución de otras tareas. 
     */
    async deleteUser(id: number): Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    }

    /**
     *updateUser es una función diseñada para actualizar la información de un usuario en la base
     *de datos, facilitando la gestión de operaciones asíncronas y la interacción con la capa
     *de persistencia.
     */
    async updateUser(id: number, infoUpdate: UserDTO): Promise<UpdateResult>{
        return (await this.execRepository).update(id, infoUpdate);
    }

}

/**
 *La clase UserService tiene la responsabilidad de gestionar las operaciones relacionadas con la
 *entidad de usuario (UserEntity) en la base de datos.
 *A continuación, se proporciona una explicación detallada de cada parte de la clase:

*Herencia:

*La clase extiende BaseService<UserEntity>, lo que sugiere que BaseService proporciona
*funcionalidades genéricas para interactuar con la base de datos relacionadas con la entidad
*UserEntity.

*Constructor:

*El constructor llama al constructor de la clase base (super(UserEntity)) para inicializar la clase
*base con la entidad UserEntity.

*Método findAllUser:

*Este método asincrónico utiliza el repositorio asociado a UserEntity para recuperar todos los
*usuarios almacenados en la base de datos mediante el método find().

*Método findUserById:

*Busca un usuario por su identificador en la base de datos. Utiliza el método findOne del
*repositorio, y la expresión ! indica que el resultado nunca será nulo.
*Si no encuentra un usuario con el ID proporcionado, devuelve undefined.

*Método createUser:

*Toma la información de un usuario representada por un objeto UserDTO,
*la guarda en la base de datos utilizando el método save del repositorio
*y luego devuelve el nuevo objeto UserEntity que representa al usuario creado.

*Método deleteUser:

*Toma la identificación de un usuario,
*utiliza el método delete del repositorio para eliminar el usuario correspondiente en la bd
*y devuelve información sobre la operación de eliminación en forma de un objeto DeleteResult.

*Método updateUser:

*Diseñado para actualizar la información de un usuario en la base de datos.
*Utiliza el método update del repositorio
*y devuelve información sobre la operación de actualización en forma de un objeto UpdateResult.

*Esta clase centraliza y encapsula la lógica relacionada con las operaciones CRUD
*de la entidad UserEntity, facilitando la gestión de operaciones asíncronas
*y la interacción con la capa de persistencia.
 */