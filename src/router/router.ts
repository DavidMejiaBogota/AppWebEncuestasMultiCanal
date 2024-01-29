import { Router } from "express";

//Clase se usa como bandera para extender clases 
export class BaseRouter<T> {
    public router: Router;
    public controller: T;
    //public middelware: U;
    constructor(Tcontroller: {new (): T}) {
        this.router = Router();
        this.controller = new Tcontroller();
        this.routes();
    }

    routes(){}
}