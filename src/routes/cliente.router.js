import express from 'express';
const clienteRoutes = express.Router();

import Clientes from '../models/cliente.model.js';

//MOSTRAR TODOS LISTA DE CLIENTES
clienteRoutes.get("/clientes", async (req, res) => {
    const clientes = await Clientes.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: clientes,
    });
});

//BUSCAR UN CLIENTE
clienteRoutes.get("/clientes/:cliente_id", async (req, res) => {
    const id = req.params.cliente_id;
    const cliente = await Clientes.findOne({
        where: {
            cliente_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: cliente,
    });
});

//REGISTRAR CLIENTES
clienteRoutes.post("/clientes", async (req, res) => {
    const datosClientes = req.body
    await Clientes.sync()
    const crearCliente = await Clientes.create({
        nombre_cliente: datosClientes.nombre_cliente,
        direccion: datosClientes.direccion,
        celular: datosClientes.celular,
        email: datosClientes.email,
        estado: datosClientes.estado,
        estadoCredito: datosClientes.estadoCredito,
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Cliente Regitrado",
    });
});

clienteRoutes.put("/clientes/:cliente_id", async(req, res) => {
    const id = req.params.cliente_id;
    const datosClientes = req.body;
    const actualizarCliente = await Clientes.update({
        nombre_cliente: datosClientes.nombre_cliente,
        direccion: datosClientes.direccion,
        celular: datosClientes.celular,
        email: datosClientes.email,
        estado: datosClientes.estado,
        estadoCredito: datosClientes.estadoCredito,
    }, {
        where: {
            cliente_id: id,
        },
    }
);
    res.status(200).json({
    ok: true,
    status: 200,
    body: actualizarCliente,
});
});



clienteRoutes.delete("/clientes", (req, res) => {
    res.send("Ruta a Clientes");
});

// module.exports = router;
export default clienteRoutes;