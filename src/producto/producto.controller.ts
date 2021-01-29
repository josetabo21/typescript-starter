import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from "@nestjs/common";
import { EsquemaValidaciones } from "src/valicaciones/esquema.validacion";
import { PipeGenerico } from "src/valicaciones/pipe.generico";
import { ProductoService } from "./producto.service";

@Controller('producto')
export class ProductoController{
    constructor (private productoService: ProductoService){
    }

    @Post()
    @UsePipes(new PipeGenerico (new EsquemaValidaciones().esquemaProducto))
    insertarProduct(@Body() bodyparams){
        const producto = {
            idProducto: bodyparams.idProducto,
            nombreProducto: bodyparams.nombreProducto,
            descripcionProducto: bodyparams.descripcionProducto,
            pictProducto: bodyparams.pictProducto,
            costoProducto: bodyparams.costoProducto
        }
        this.productoService.insertarProducto(producto)
    }
    @Get()
    obtenerTodosProductos(){
        return this.productoService.obtenerTodosProductos()
    }
    @Get('/:id')
    obtenerUnProducto(@Param() paramParametros) {
        return this.productoService.obtenerUnProducto(paramParametros.id);
    }

    @Put('/:id')
    actualizarUnProducto(@Param() paramParametros, @Body() bodyParametros) {
        const idProducto = paramParametros.id;
        const productoActual = {
            nombreProducto: bodyParametros.nombreProducto,
            descripcionProducto: bodyParametros.descripcionProducto,
            pictProducto: bodyParametros.pictProducto,
            costoProducto: bodyParametros.costoProducto
        };
        this.productoService.actualizarProducto(idProducto, productoActual);
    }
    @Delete('/:id')
    eliminarProducto(@Param() paramParams){
        const idProducto = paramParams.id
        this.productoService.eliminarProducto(idProducto)
    }
}
