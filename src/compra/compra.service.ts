import { Injectable } from "@nestjs/common";
import { getConnection, getRepository } from 'typeorm';
import { CompraEntity } from "./compra.entity";

@Injectable()
export class CompraService{
    async insertarCompra(compra) {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(CompraEntity)
            .values(compra)
            .execute();
    }
    async obtenerTodasCompras() {
        const compras = await getRepository(CompraEntity)
            .createQueryBuilder('compra')
            .getMany();
        return compras;
    }
    async obtnerUnaCompra(idBusqueda: number) {
        const compraId = await getRepository(CompraEntity)
            .createQueryBuilder('compra')
            .where('compra.idCompra = :id', { id: idBusqueda })
            .getOne();
        return compraId;
    }
    async actualizarCompra(idActualizar: number, compraActual) {
        await getConnection()
            .createQueryBuilder()
            .update(CompraEntity)
            .set(compraActual)
            .where('idCompra = :id', { id: idActualizar })
            .execute();
    }
    async eliminarCompra(idEliminar: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(CompraEntity)
            .where('idCompra = :id', { id: idEliminar })
            .execute();
    }

}