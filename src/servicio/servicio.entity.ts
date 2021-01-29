import { from } from "rxjs"
import { PersonaEntity } from "src/persona/persona.entity"
import {PrimaryGeneratedColumn, Column, OneToMany, Entity} from 'typeorm'
@Entity('Servicio')
export class ServicioEntity{
    @PrimaryGeneratedColumn()
    idServicio: number

    @Column({
        name: 'tipoServicio',
        type: 'varchar',
        length: '50',
        default: "tipoServicio"
    })
    tipoServicio: string

    @Column({
        name: 'descripcion',
        type: 'varchar',
        length:'250',
        default: 'descripcion'
    })
    descripcion: string

    @Column({
        name: 'urlRed',
        type:'varchar',
        length: '250',
        default: 'urlRed'
    })
    urlRed: string


    @Column({
        name: 'logo',
        type: 'image',
        length: '250',
        default: 'logo'
    })
    logo: string 

    @OneToMany(
        type => PersonaEntity,
        servicioPersona => servicioPersona.personaServicio
    )
    serivicioPersona: PersonaEntity[]
}