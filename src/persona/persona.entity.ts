import { ClienteEntity } from 'src/cliente/cliente.entity'
import { PropietarioEntity } from 'src/propietario/propietario.entity'
import { ServicioEntity } from 'src/servicio/servicio.entity'
import { UsuarioEntity } from 'src/usuario/usuario.entity'
import {BeforeInsert, Unique, Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
@Entity('Persona')
@Unique(["correo"])

export class PersonaEntity{
@PrimaryGeneratedColumn()
idPersona: number

@Index()
@Column(
    {
        name: 'nombre',
        type: 'varchar',
        length: '50',
        default: 'nombre'
    }
)
nombre: string

@Column(
    {
        name:'apellido',
        type: 'varchar',
        length: '50',
        default: 'apellido'
    }
)
apellido: string

@Column(
    {
        name: 'numCedula',
        type: 'number',
        length: '10',
        default: 'numCedula',
    }
)
numCedula: number

@Column(
    {
        name: 'direccion',
        type: 'varchar',
        length: '100',
        default: 'direccion'
    }
)
direccion: string

@Column(
    {
        name: 'telefono',
        type: 'number',
        length: '10',
        default: 'telefono'
    }
)
telefono: number

@Column(
    {
        name: 'correo',
        type:'varchar',
        length:'100',
        default:'correo'
    }
)
correo: string

@OneToMany(
    type => ClienteEntity,
    personaCliente => personaCliente.clientePersona
)
personaCliente: ClienteEntity[]

@OneToMany(
    type => UsuarioEntity, 
    personaUsuario => personaUsuario.usuarioPersona
)
personaUsuario: UsuarioEntity[]
@OneToMany(
    type => ServicioEntity,
    personaServicio => personaServicio.serivicioPersona
)
personaServicio: ServicioEntity[]

@OneToMany(
    type => PropietarioEntity,
    personaPropietario => personaPropietario.propietarioPersona
)
personaPropietario: PropietarioEntity[]

}
