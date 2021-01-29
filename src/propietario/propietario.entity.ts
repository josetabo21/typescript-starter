import { NegocioEntity } from 'src/negocio/negocio.entity'
import { PersonaEntity } from 'src/persona/persona.entity'
import {PrimaryGeneratedColumn, Column, OneToMany, Entity} from 'typeorm'
@Entity('Propietario')

export class PropietarioEntity{
    @PrimaryGeneratedColumn()
    idPropietario: number
    
    @OneToMany(
        type => NegocioEntity,
        propietarioNegocio => propietarioNegocio.negocioPropietario
    )
    propietarioNegocio: NegocioEntity[]

    @OneToMany(
        type => PersonaEntity,
        propietarioPersona => propietarioPersona.personaPropietario
    )
    propietarioPersona: PersonaEntity[]
}