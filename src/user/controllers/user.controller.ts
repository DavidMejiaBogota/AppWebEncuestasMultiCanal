import { HttpResponse } from './../../shared/response/http.response';
import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { DeleteResult, UpdateResult } from 'typeorm';

export class UserController  {
    
    constructor(
        private readonly userService: UserService = new UserService(),
        private readonly httpResponse: HttpResponse = new HttpResponse()
        ) {}
    
    //Método para buscar todos los usuarios
    async getUsers (req: Request, res: Response) {
        
        try {
            const data = await this.userService.findAllUser();
            if(data.length === 0) {
                return this.httpResponse.NotFound(res, "No extiste dato");
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    //Método para buscar un usuario por id
    async getUserById (req: Request, res: Response) {
        const {id} = req.params;
        try {
            const numericId = Number(id);
            const data = await this.userService.findUserById(numericId);
            if (!data) {
                return this.httpResponse.NotFound(res, "No extiste dato");
            }
            return this.httpResponse.Ok(res, data)
     } catch (e) {
        console.error(e);
        return this.httpResponse.Error(res, e);
     }   
    }

    //Método para crear usuario
    async createUser(req: Request, res: Response) {
        try {
            const data = await this.userService.createUser(req.body);
            return this.httpResponse.Ok(res, data);
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    //Método para actualizar un usuario
    async updateUser(req: Request, res: Response) {
        const {id} = req.params;
        try {
            const numericId = Number(id);
            const data: UpdateResult = await this.userService.updateUser(numericId, req.body);
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en actualizar");
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    //Método para eliminar un usuario
    async deleteUser(req: Request, res: Response) {
        const {id} = req.params;
        try {
            const numericId = Number(id);
            const data: DeleteResult = await this.userService.deleteUser(numericId);
            if(!data.affected) {
                return this.httpResponse.NotFound(res, "Hay un error en eliminar, ese ID no existe");
            }
            return this.httpResponse.Ok(res, data)
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    
};