import { HttpException } from "@nestjs/common";

export class ExcepcionPersonaliza extends HttpException{
    constructor (readonly mensaje: any, statusCode: number){
        super(mensaje,statusCode)
    }
}