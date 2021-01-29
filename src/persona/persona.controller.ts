import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from "@nestjs/common";
import { EsquemaValidaciones } from "src/valicaciones/esquema.validacion";
import { PipeGenerico } from "src/valicaciones/pipe.generico";
import { PersonaService } from "./persona.service";

@Controller('persona')
export class   PersonaController{
    constructor (private personaService: PersonaService){
    }
    @Post()
    @UsePipes(new PipeGenerico (new EsquemaValidaciones().esquemaPersona))
    insertarPersona(@Body() bodyParametros){
        const persona = {
            idPersona: bodyParametros.idPersona,
            nombre: bodyParametros.nombre,
            apellido: bodyParametros.apellido,
            numCedula: bodyParametros.numCedula,
            direccion: bodyParametros.direccion,
            telefono: bodyParametros.telefono,
            correo: bodyParametros.correo
        }
        this.personaService.insertarPersona(persona)
    }
    @Get()
    obtenerTodosPersonas(){
        return this.personaService.obtenerTodosPersonas()
    }
    @Get('/:id')
    obtenerUnaPersona(@Param() paramParametros){
        return this.personaService.obtenerUnaPersona(paramParametros.id)
    }
    @Put('/:id')
    actualizarPersona(@Param() parametros, @ Body() bodyparams){
        const idPersona = parametros.id
        const personaActualizada = {
            nombre: bodyparams.nombre,
            apellido: bodyparams.apellido,
            numCedula: bodyparams.numCedula,
            direccion: bodyparams.direccion,
            telefono: bodyparams.telefono,
            correo: bodyparams.correo
        }
        return this.personaService.actualizarPersona(idPersona,personaActualizada)
    }
    @Delete('/:id')
    eliminarPersona(@Param() paramParametro){
        const idPersona = paramParametro.id
        this.personaService.eliminarPersona(idPersona)
    }
}