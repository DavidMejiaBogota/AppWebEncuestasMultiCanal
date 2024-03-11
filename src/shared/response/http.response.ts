import { Response } from "express";
/**
 * Clase para manejar respuestas HTTP en Express.
 */
export enum HttpStatus {
    OK = 200,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500
};

export class HttpResponse {
    /**
     * Método para devolver una respuesta con estado 200 (OK).
     * @param res - Objeto Response de Express.
     * @param data - Datos opcionales a incluir en la respuesta.
     * @returns Objeto Response con estado 200 y mensaje de éxito.
     */
    Ok(res: Response, data?: any): Response{
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            statusMsg: "Success",
        });
    }

    /**
     * Método para devolver una respuesta con estado 404 (Not Found).
     * @returns Objeto Response con estado 404 y mensaje de recurso no encontrado.
     */
    NotFound(res: Response, data?: any): Response{
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            statusMsg: "Not Foundf",
            error: data,
        });
    }

    /**
     * Método para devolver una respuesta con estado 401 (Unauthorized).
     * @returns Objeto Response con estado 401 y mensaje de no autorizado.
     */
    Unauthorized(res: Response, data?: any): Response{
        return res.status(HttpStatus.UNAUTHORIZED).json({
            status: HttpStatus.UNAUTHORIZED,
            statusMsg: "Unauthorized",
            error: data,
        })
    }

    /**
     * Método para devolver una respuesta con estado 403 (Forbidden).
     * @returns Objeto Response con estado 403 y mensaje de acceso prohibido.
     */
    Forbidden(res: Response, data?:any): Response{
        return res.status(HttpStatus.FORBIDDEN).json({
            status: HttpStatus.FORBIDDEN,
            statusmsg: "Forbidden",
            error: data,
        });
    }

    /**
     * Método para devolver una respuesta con estado 500 (Internal Server Error).
     * @returns Objeto Response con estado 500 y mensaje de error interno del servidor.
     */
    Error(res: Response, data?: any): Response{
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            statusMsg: "Internal server error",
            error: data,
        });
    }
};
