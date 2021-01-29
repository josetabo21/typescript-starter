import { ProductoEntity } from 'src/producto/producto.entity'
import { PropietarioEntity } from 'src/propietario/propietario.entity'
import {PrimaryGeneratedColumn, Column, Entity, OneToMany} from 'typeorm'
@Entity('negocio')

export class NegocioEntity{
    @PrimaryGeneratedColumn()
    idNegocio: number

    @Column({
        name: 'nomNegocio',
        type: 'varchar',
        length: '100',
        default: 'nomNegocio'
    })
    nomNegocio: string

    @Column({
        name: 'direccion',
        type: 'varchar',
        length: '200',
        default: 'direccion'
    })
    dirNegocio: string

    @Column({
        name: 'telNegocio',
        type: 'varchar',
        length: '20',
        default: 'telNegocio'
    })
    telNegocio: string

    @Column({
        name: 'urlNegocio',
        type: 'varchar',
        length: '250',
        default: 'urlNegocio'
    })
    urlNegocio: string

    @Column({
        name: 'facebook',
        type: 'varchar',
        length: '250',
        default: 'facebook'
    })
    facebook: string

    @Column({
        name: 'instagram',
        type: 'varchar',
        length: '250',
        default: 'instagram'
    })
    instagram: string

    @Column({
        name: 'pictNegocio',
        type: 'varchar',
        length: '250',
        default: 'pictNegocio'
    })
    pictNegocio: string

    @OneToMany(
        type => ProductoEntity,
        negocioProducto => negocioProducto.productoNegocio
    )
    negocioProducto: ProductoEntity[]

    @OneToMany(
        type => PropietarioEntity,
        negocioPropietario => negocioPropietario.propietarioNegocio
    )
    negocioPropietario: PropietarioEntity[]
}