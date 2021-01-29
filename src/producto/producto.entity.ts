import { from } from "rxjs";
import { CompraEntity } from "src/compra/compra.entity";
import { NegocioEntity } from "src/negocio/negocio.entity";
import {PrimaryGeneratedColumn, Column, OneToMany, Entity} from 'typeorm'
@Entity('producto')

export class ProductoEntity{
    @PrimaryGeneratedColumn()
    idProducto: number

    @Column({
        name: 'nombreProducto',
        type: 'varchar',
        length: '50',
        default: 'nombreProducto'
    })
    nombreProducto: string

    @Column({
        name: 'descripcionProducto',
        type: 'varchar',
        length: '250',
        default: 'descripcionProducto'
    })
    descripcionProducto: string

    @Column({
        name: 'pictProducto',
        type: 'image',
        length: '250',
        default: 'pictProducto'
    })
    pictProducto: string

    @Column({
        name: 'costo',
        type: 'number',
        length: '50',
        default: 'costo'
    })
    costoProducto: number

    @OneToMany(
        type => CompraEntity,
        productoCompra => productoCompra.compraProducto
    )
    productoCompra: CompraEntity[]

    @OneToMany(
        type => NegocioEntity,
        productoNegocio => productoNegocio.negocioProducto
    )
    productoNegocio: NegocioEntity[]
}