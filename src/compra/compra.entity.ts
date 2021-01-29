import { ClienteEntity } from "src/cliente/cliente.entity";
import { ProductoEntity } from "src/producto/producto.entity";
import {PrimaryGeneratedColumn, Column, Entity, OneToMany} from 'typeorm'
@Entity('Compra')

export class CompraEntity{
    @PrimaryGeneratedColumn()
    idCompra: number

    @Column({
        name: 'cantidad',
        type: 'number',
        length:'10',
        default: 'cantidad'
    })
    cantidad: number

    @Column({
        name: 'total',
        type: 'number',
        length:'10',
        default: 'total'
    })
    total: number

    @Column({
        name: 'fechaCompra',
        type: 'date',
        length: '10',
        default: 'fechaCompra'
    })
    fechaCompra: string

    @Column({
        name: 'estadoCompra',
        type: 'string',
        length: '25',
        default: 'estadoCompra'
    })
    estadoCompra: string

    @OneToMany(
        type => ClienteEntity,
        compraCliente => compraCliente.clienteCompra
    )
    compraCliente: ClienteEntity[]

    @OneToMany(
        type => ProductoEntity,
        CompraProducto => CompraProducto.productoCompra
    )
    compraProducto: ProductoEntity[]
}