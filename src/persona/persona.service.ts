import { Injectable } from "@nestjs/common";
import { getConnection, getRepository } from 'typeorm';
import { PersonaEntity } from "./persona.entity";

@Injectable()
export class PersonaService {
    /**insertar nuevo */
    async insertarPersona(persona){
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(PersonaEntity)
            .values(persona)
            .execute()
    }
    /**obtener todos personas */
    async obtenerTodosPersonas(){
        const personas = await getRepository(PersonaEntity)
        .createQueryBuilder('persona')
        .getMany()
        return personas
    }
    /**obtener una persona */
    async obtenerUnaPersona (idBusqueda: number){
        const personaId = await getRepository(PersonaEntity)
        .createQueryBuilder('persona')
        .where('persona.idPersona = id', {id:idBusqueda})
        .getOne()
        return personaId
    }
    /**actualizar una persona */
    async actualizarPersona(idActualizar: number, personaActualizada){
        await getConnection()
            .createQueryBuilder()
            .update(PersonaEntity)
            .set(personaActualizada)
            .where('idPersona = id',{id: idActualizar})
            .execute()
    } 
    async eliminarPersona(idEliminar: number){
        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(PersonaEntity)
        .where('idPersona = id', {id: idEliminar})
        .execute()
    }
}