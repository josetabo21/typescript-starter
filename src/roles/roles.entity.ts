import { from } from "rxjs";
import { ClienteEntity } from "src/cliente/cliente.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import {PrimaryGeneratedColumn, Column, Entity, OneToMany} from 'typeorm'
@Entity('Roles')

export class RolesEntity{
    @PrimaryGeneratedColumn()
    idRol: number

    @Column({
        name: 'nomRol',
        type: 'varchar',
        length: '25',
        default: 'nomRol'
    })
    nomRol: string

    @OneToMany(
        type => UsuarioEntity,
        rolUsuario => rolUsuario.usuarioRol
    )
    rolUsuario: UsuarioEntity[]

    @OneToMany(
        type => ClienteEntity,
        rolCliente => rolCliente.clienteRol
    )
    rolCliente: ClienteEntity[]
}