import { ClienteEntity } from 'src/cliente/cliente.entity';
import { PersonaEntity } from 'src/persona/persona.entity';
import { RolesEntity } from 'src/roles/roles.entity';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'

@Entity('Usuario')

export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column({
    name: 'userName',
    type: 'varchar',
    length: '50',
    default: 'userName',
  })
  userName: string;

  @Column({
    name: 'contrasena',
    type: 'varchar',
    length: '50',
    default: 'contrasena'
  })
  contrasena: string

  @OneToMany(
    type => PersonaEntity,
    usuarioPersona => usuarioPersona.personaUsuario
  )
  usuarioPersona: PersonaEntity[]

  @OneToMany(
    type => ClienteEntity,
    usuarioCliente => usuarioCliente.clienteUsuario
  )
  usuarioCliente: ClienteEntity[]

  @OneToMany(
    type => RolesEntity,
    usuarioRol => usuarioRol.rolUsuario
  )
  usuarioRol: RolesEntity[]
}
