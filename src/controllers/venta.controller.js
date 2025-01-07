import { Venta } from "../models/Ventas.js"
import { VentaDetalle } from "../models/VentaDetalles.js"

//crear registro
export const createVenta = async (req, res) => {
   const t = await sequelize.transaction();
   
     const { monto, metodoPago, tipoVenta, tipoEntrega,cliente_id,empleado_id, detalles } = req.body;
   
     try {
       const nuevaVenta = await Venta.create({
         monto,
         metodoPago,
         tipoVenta,
         tipoEntrega,
         cliente_id,
         empleado_id   
       },
       { transaction: t }
     );
   
      // Crear productos asociados a la venta
      const Newdetalles = await VentaDetalle.bulkCreate(
       detalles.map(detalle => ({
         producto_id: detalle.producto_id,
         venta_id: detalle.lote,
         cantidad: detalle.cantidad,
         precio: detalle.precio,
         total: detalle.precioVenta,
         venta_id: nuevaVenta.id // Asociamos cada venta por su ID
       })),{ transaction: t }
     );
      
     // Si ambos registros se crean correctamente, confirmamos la transacción
     await t.commit();
   
       res.status(201).json({mensaje: 'Venta Registrada Correctamente',
         nuevaVenta,
         Newdetalles});
     } catch (error) {
       res.status(500).json({ message: error.message });
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
 const {id} = req.params
    try{
        const venta = await Venta.findOne({
            where: {id},
        });
        res.status(200).json(venta);
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
