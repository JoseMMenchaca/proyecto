import { Venta } from "../models/venta.model.js"

//crear registro
export const createVenta = async (req, res) => {
    try{
        const { clienteId,
            monto,
            metodoPago,
            tipoVenta,
            tipoEntrega
        } = req.body

        const crearVenta = await Venta.create({
            clienteId,
            monto,
            metodoPago,
            tipoVenta,
            tipoEntrega
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: "Venta Registrada",
    });
    }
    catch(error){
        return res.status(500).json({message: error.messaje});
    }
}

//listar registros
export const getVentas = async (req, res) => {
    try{
        const ventas = await Venta.findAll()
        res.status(200).json({
            message: "Lista de Ventas",
            ok: true,
            status: 200,
            body: ventas,
        });
    }
    catch(error){
        return res.status(500).json({message: error.messaje});
    }   
}

//mostrar un solo registro
export const getVenta = async (req, res) => {
 const {venta_id} = req.params
    try{
        const venta = await Venta.findOne({
            where: {venta_id},
        });
        res.status(200).json({
            message: "Registro Encontrado",
            ok: true,
            status: 200,
            body: venta,
        });
    }
    catch(error){
        return res.status(500).json({message: error.messaje});
    }
}

//actualizar registro
export const updateVenta = async (req, res) => {
    const {venta_id} = req.params
    try{
        const venta = await Venta.findOne({
            where: {venta_id},
        });
        venta.set(req.body);
        await venta.save();
        
        res.status(200).json({
            message: "Registro Actualizado",
            ok: true,
            status: 200,
            body: venta,
        });
    }
    catch(error){
        return res.status(500).json({message: error.messaje});
    }      
}
