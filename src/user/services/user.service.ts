import { UserEntity } from './../entities/user.entity';
import { BaseService } from "../../config/base.service";
import { UserDTO } from '../dto/user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

export class UserService extends BaseService<UserEntity> {
    constructor() {
        super(UserEntity);
    }

    /**
     * Ahora se agregan los métos a través de las 5 funciones funcines tipicas de un CRUD
     */
    //Método para buscar todos los usuarios
    async findAllUser():Promise<UserEntity[]>{
        return (await this.execRepository).find();
    };
     
    //Método para buscar un usuario por id
    async findUserById(id: number): Promise<UserEntity | undefined | null >{
        return (await this.execRepository).findOne({where: {id}})
    };

    //Método para cerar usuario
    async createUser(body: UserDTO): Promise<UserEntity>{
        return (await this.execRepository).save(body);
    };

    async deleteUser(id: number): Promise<DeleteResult>{
        return (await this.execRepository).delete(id);
    };
    async updateUser(id: number, infoUpdate: UserDTO): Promise<UpdateResult>{
        return (await this.execRepository).update(id, infoUpdate);
    };
    

}

