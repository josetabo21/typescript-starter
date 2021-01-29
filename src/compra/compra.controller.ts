import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from "@nestjs/common";
import { EsquemaValidaciones } from "src/valicaciones/esquema.validacion";
import { PipeGenerico } from "src/valicaciones/pipe.generico";
import { CompraService } from "./compra.service";

@Controller('compra')
export class CompraController{
    constructor (private compraService: CompraService){
    }
    @Post()
    @UsePipes(new PipeGenerico(new EsquemaValidaciones().esquemaCompra))
    insertarCompra(@Body() bodyparams){
        const compra = {
            idCompra: bodyparams.idCompra,
            cantidad: bodyparams.cantidad,
            total: bodyparams.total,
            fechaCompra: bodyparams.fechaCompra,
            estadoCompra: bodyparams.estadoCompra
        }
        this.compraService.insertarCompra(compra)
    }
    @Get()
    obtenerTodasCompras(){
        return this.compraService.obtenerTodasCompras()
    }
    @Get('/:id')
    obtnerUnaCompra(@Param() paramParams){
        return this.compraService.obtnerUnaCompra(paramParams)
    }
    @Put('/:id')
    actualizarCompra(@Param() paramParams, @Body() bodyParams){
        const idCompra = paramParams.id
        const compraActual = {
            cantidad: bodyParams.cantidad,
            total: bodyParams.total,
            fechaCompra: bodyParams.fechaCompra,
            estadoCompra: bodyParams.estadoCompra
        }
        this.compraService.actualizarCompra(idCompra, compraActual)
    }
    @Delete('/:id')
    eliminarCompra(@Param() paramParams){
        const idCompra = paramParams.id
        this.compraService.eliminarCompra(idCompra)
    }
}