import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from "@nestjs/common";
import { EsquemaValidaciones } from "src/valicaciones/esquema.validacion";
import { PipeGenerico } from "src/valicaciones/pipe.generico";
import { NegocioService } from "./negocio.service";

@Controller('negocio')
export class NegocioController {
    constructor (private negocioService: NegocioService){
    }
    @Post()
    @UsePipes(new PipeGenerico(new EsquemaValidaciones().esquemaNegocio))
    insertarNegocio(@Body() bodyparams){
        const negocio = {
            idNegocio: bodyparams.idNegocio,
            nomNegocio: bodyparams.nomNegocio, 
            dirNegocio: bodyparams.dirNegocio,
            telNegocio: bodyparams.telNegocio,
            urlNegocio: bodyparams.urlNegocio,
            facebook: bodyparams.facebook,
            instagram: bodyparams.instagram,
            pictNegocio: bodyparams.pictNegocio
        }
        this.negocioService.insertarNegocio(negocio)
    }
    @Get()
    obtenerTodosNegocios(){
        return this.negocioService.obtenerTodosNegocios()
    }
    @Get('/:id')
    obtenerUnNegocio(@Param() paramParametres){
        return this.negocioService.obtenerUnNegocio(paramParametres.id)
    }
    @Put('/:id')
    actualizarNegocio(@Param() paramParam, @Body() bodyparams){
        const idNegocio = paramParam.id
        const negocioActualizar = {
            nomNegocio: bodyparams.nomNegocio, 
            dirNegocio: bodyparams.dirNegocio,
            telNegocio: bodyparams.telNegocio,
            urlNegocio: bodyparams.urlNegocio,
            facebook: bodyparams.facebook,
            instagram: bodyparams.instagram,
            pictNegocio: bodyparams.pictNegocio
        }
        this.negocioService.actualizarNegocio(idNegocio, negocioActualizar)
    }
    @Delete('/:id')
    eliminarUnNegocio(@Param() paramParams){
        const idNegocio = paramParams.id
        this.negocioService.eliminarUnNegocio(idNegocio)
    }
}