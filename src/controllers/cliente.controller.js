import { Cliente } from "../models/cliente.model.js"

//listar registros
export const getClientes = async (req, res) => {
        const clientes = await Cliente.findAll()
            res.status(200).json({
                message: "Lista de Clientes",
                ok: true,
                status: 200,
                body: clientes,
            });   
}

//crear registro
export const createCliente = async (req, res) => {
    const { nombre_cliente,
        direccion,
        celular,
        email,
        estado,
        estadoCredito} = req.body

    const crearCliente = await Cliente.create({
        nombre_cliente,
        direccion,
        celular,
        email,
        estado,
        estadoCredito
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Cliente Regitrado",
    });
}

//actualizar registro
export const updateCliente = async (req, res) => {
    const { cliente_id } = req.params;
    const { nombre_cliente,
            direccion,
            celular,
            email,
            estado,
            estadoCredito
    } = req.body;
    
    const cliente = await Cliente.findByPk(cliente_id)
        cliente.nombre_cliente = nombre_cliente;
        cliente.direccion = direccion;
        cliente.celular = celular;
        cliente.email = email;
        cliente.estado = estado;
        cliente.estadoCredito = estadoCredito;
        await cliente.save()

        res.send("actualizado")
};