import Joi from 'joi'
export class EsquemaValidaciones{
    public esquemaPersona = Joi.object().keys({
        idPersona: Joi.number().integer().min(1).max(1000),
        nombre: Joi.string().regex(/^[a-zA-Z]{1,50}$/),
        apellido: Joi.string().regex(/^[a-zA-Z]{1,50}$/),
        numCedula: Joi.string().regex(/^[0-9]{1,10}$/),
        direccion: Joi.string().regex(/^[a-zA-Z0-9.-]{1,100}$/),
        telefono: Joi.string().regex(/^[0-9]{1,10}$/),
        correo: Joi.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),

    })
    public esquemaPropietario = Joi.object().keys({
        idPropietario: Joi.number().integer().min(1).max(1000)
    })
    public esquemaCliente = Joi.object().keys({
        idCliente: Joi.number().integer().min(1).max(1000),

    })
    public esquemaCompra = Joi.object().keys({
        idCompra: Joi.number().integer().min(1).max(1000),
        cantidad: Joi.number().integer().min(1).max(1000),
        total: Joi.number().integer().min(1).max(1000),
        fechaCompra: Joi.string().regex(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/),

    })
    public esquemaNegocio = Joi.object().keys({
        idNegocio: Joi.number().integer().min(1).max(1000),
        nomNegocio: Joi.string().regex(/^[a-zA-Z0-9]{1,100}$/),
        dirNegocio: Joi.string().regex(/^[a-zA-Z0-9.-]{1,100}$/),
        telNegocio: Joi.string().regex(/^[0-9]{1,10}$/),

    })
    public esquemaProducto = Joi.object().keys({
        idProducto: Joi.number().integer().min(1).max(1000),
        nombreProducto: Joi.string().regex(/^[a-zA-Z0-9]{1,100}$/),
        descripcionProducto: Joi.string().regex(/^[a-zA-Z0-9]{1,100}$/),
        costoProducto: Joi.number(),
    })
    public esquemaUsuario = Joi.object().keys({
        idUsuario: Joi.number().integer().min(1).max(1000),
        userName: Joi.string().regex(/^[a-zA-Z0-9]{1,100}$/),
        contrasena: Joi.string().regex(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,16}$/),
    })
    
}