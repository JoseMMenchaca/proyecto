import { Empleado } from "../models/cliente.model.js"

//listar registros
export const getClientes = async (req, res) => {
    try{
        const clientes = await Cliente.findAll()
        res.status(200).json({
            message: "Lista de Clientes",
            ok: true,
            status: 200,
            body: clientes,
    });
    }
    
    catch(error){
        return res.status(500).json({message: error.messaje});
   }   
}

//crear registro
export const createCliente = async (req, res) => {
    try{
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
    catch(error){
        return res.status(500).json({message: error.messaje});
   }
}

export const getCliente = async (req, res) => {
    const {id} = req.params
       try{
           const cliente = await Cliente.findOne({
               where: {id},
           });
           res.status(200).json({
               message: "Registro Encontrado",
               ok: true,
               status: 200,
               body: cliente,
           });
       }
       catch(error){
            return res.status(500).json({message: error.messaje});
       }
}

//actualizar registro
export const updateCliente = async (req, res) => {
    const {id} = req.params
    try{
        const cliente = await Cliente.findOne({
            where: {id},
        });
        cliente.set(req.body);
        await cliente.save();
        
        res.status(200).json({
            message: "Registro Actualizado",
            ok: true,
            status: 200,
            body: cliente,
        });
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
};

//mostrar compras de un cliente
//api/clientes/16/ventas
export const getClienteCompras = async (req, res) => {
    const {id} = req.params
    try{
        const ventas = await Venta.findAll({
            where: {id: id},
        });      
        res.status(200).json({
            message: "Ventas del cliente",
            ok: true,
            status: 200,
            body: ventas,
        });
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }    
};
