import { CompraEntity } from 'src/compra/compra.entity'
import { PersonaEntity } from 'src/persona/persona.entity'
import { RolesEntity } from 'src/roles/roles.entity'
import { UsuarioEntity } from 'src/usuario/usuario.entity'
import{PrimaryGeneratedColumn, OneToMany, Entity} from 'typeorm'
@Entity('Cliente')

export class ClienteEntity{
    
    @PrimaryGeneratedColumn()
        idCliente: number
    
    @OneToMany(
        type => PersonaEntity,
        clientePersona => clientePersona.personaCliente
    )
    clientePersona: ClienteEntity[]
    @OneToMany(
        type => UsuarioEntity,
        clienteUsuario => clienteUsuario.usuarioCliente
    )
    clienteUsuario: UsuarioEntity[]

    @OneToMany(
        type => CompraEntity,
        clienteCompra => clienteCompra.compraCliente
    )
    clienteCompra: CompraEntity[]

    @OneToMany(
        type => RolesEntity,
        clienteRol => clienteRol.rolCliente
    )
    clienteRol: RolesEntity[]
}