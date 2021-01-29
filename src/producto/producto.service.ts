import { Injectable } from "@nestjs/common";
import { ProductoEntity } from "./producto.entity";
import { getConnection, getRepository } from 'typeorm';

@Injectable()
export class ProductoService{
    async insertarProducto(producto) {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(ProductoEntity)
            .values(producto)
            .execute();
    }
    async obtenerTodosProductos() {
        const productos = await getRepository(ProductoEntity)
            .createQueryBuilder('producto')
            .getMany();
        return productos;
    }
    async obtenerUnProducto(idBusqueda: number) {
        const productoId = await getRepository(ProductoEntity)
            .createQueryBuilder('producto')
            .where('producto.idProducto = :id', { id: idBusqueda })
            .getOne();
        return productoId;
    }
    async actualizarProducto(idActualizar: number, productoActual) {
        await getConnection()
            .createQueryBuilder()
            .update(ProductoEntity)
            .set(productoActual)
            .where('idProducto = :id', { id: idActualizar })
            .execute();
    }
    async eliminarProducto(idEliminar: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(ProductoEntity)
            .where('idProducto = :id', { id: idEliminar })
            .execute();
    }
}