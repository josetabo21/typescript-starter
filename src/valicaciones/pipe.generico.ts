import { HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import Joi from "joi";
import { ExcepcionPersonaliza } from "./excepciones.personalizada";
@Injectable()
export class PipeGenerico implements PipeTransform {
    constructor (readonly esquemaValidaciones: Joi.SchemaLike){
    }
    transform(valor: any){
        const{error} = Joi.valid(valor, this.esquemaValidaciones)
        if(error){
            throw new ExcepcionPersonaliza({
                mensaje: "Los parametros no se validaron",
                status: "400",
                error: {error},
            }, HttpStatus.BAD_REQUEST)
        }
        return valor
    }
}