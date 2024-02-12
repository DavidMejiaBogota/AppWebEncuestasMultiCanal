import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController  {
    
    constructor(private readonly userService: UserService = new UserService()) {}
    
    //Método para buscar todos los usuarios
    async getUsers (req: Request, res: Response) {
        
        try {
            const data = await this.userService.findAllUser();
            res.status(200).json(data)
        } catch (e) {
            console.error(e);
        }
    }

    //Método para buscar un usuario por id
    async getUserById (req: Request, res: Response) {
        const {id} = req.params;
        try {
            const numericId = Number(id);
            const data = await this.userService.findUserById(numericId);
            res.status(200).json(data)
     } catch (e) {
        console.error(e);
     }   
    }

    //Método para crear usuario
    async createUser(req: Request, res: Response) {
        try {
            const data = await this.userService.createUser(req.body);
            res.status(200).json(data)
        } catch (e) {
            console.error(e);
        }
    }

    //Método para actualizar un usuario
    async updateUser(req: Request, res: Response) {
        const {id} = req.params;
        try {
            const numericId = Number(id);
            const data = await this.userService.updateUser(numericId, req.body);
            res.status(200).json(data)
        } catch (e) {
            console.error(e);
        }
    }

    //Método para eliminar un usuario
    async deleteUser(req: Request, res: Response) {
        const {id} = req.params;
        try {
            const numericId = Number(id);
            const data = await this.userService.deleteUser(numericId);
        } catch (e) {
            console.error(e);
        }
    }

    
} 
