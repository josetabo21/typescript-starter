import { Injectable } from "@nestjs/common";
import { getConnection, getRepository } from 'typeorm';
import { NegocioEntity } from "./negocio.entity";
@Injectable()
export class NegocioService {
    async insertarNegocio(negocio){
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(NegocioEntity)
            .values(negocio)
            .execute()
    }

    async obtenerTodosNegocios(){
        const negocios = await getRepository(NegocioEntity)
            .createQueryBuilder()
            .getMany()
        return negocios
    }
    async obtenerUnNegocio(idBusqueda: number) {
        const negocioId = await getRepository(NegocioEntity)
            .createQueryBuilder('negocio')
            .where('negocio.idNegocio = :id', { id: idBusqueda })
            .getOne();
        return negocioId;
    }
    async actualizarNegocio(idActualizar: number, negocioActualizar) {
        await getConnection()
            .createQueryBuilder()
            .update(NegocioEntity)
            .set(negocioActualizar)
            .where('idNegocio = :id', { id: idActualizar })
            .execute();
    }
    async eliminarUnNegocio(idEliminar: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(NegocioEntity)
            .where('idNegocio = :id', { id: idEliminar })
            .execute();
    }
}