import { sequelize } from "../database/db.js";
import { Ingreso } from "../models/Ingresos.js";
import { IngresoDetalle } from "../models/IngresoDetalles.js";

// Función registrar nuevo ingreso
export async function registrarIngreso(req, res) {
  const t = await sequelize.transaction();

  const { fechaIngreso, montoTotal, proveedor_id, detalles } = req.body;

  try {
    const newIngreso = await Ingreso.create({
      fechaIngreso,
      montoTotal,
      proveedor_id,   
    },
    { transaction: t }
  );

   // Crear productos asociados al ingreso 
   const Newdetalles = await IngresoDetalle.bulkCreate(
    detalles.map(detalle => ({
      producto_id: detalle.producto_id,
      lote: detalle.lote,
      cantidad: detalle.cantidad,
      precio: detalle.precio,
      precioVenta: detalle.precioVenta,
      saldoProducto: detalle.saldoProducto,
      ingreso_id: newIngreso.id // Asociamos cada post al usuario por su ID
    })),{ transaction: t }
  );
   
  // Si ambos registros se crean correctamente, confirmamos la transacción
  await t.commit();

    res.status(201).json({mensaje: 'Ingreso Registrado correctamente',
      newIngreso,
      Newdetalles});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Función buscar ingreso por ID
export async function buscarIngreso(req, res) {
  const { id } = req.params;

  try {
    const ingreso = await Ingreso.findByPk(id);
    if (!ingreso) {
      return res.status(404).json({ message: "Ingreso no encontrado" });
    }
    res.json(ingreso);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Función actualizar saldo de un ingreso
export async function actualizarSaldo(req, res) {
  const { id } = req.params;
  const { saldoProducto } = req.body;

  try {
    const ingreso = await Ingreso.findByPk(id);
    if (!ingreso) {
      return res.status(404).json({ message: "Ingreso no encontrado" });
    }

    ingreso.saldoProducto = saldoProducto;
    await ingreso.save();

    res.json(ingreso);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Función listar todos los ingresos
export async function listarIngresos(req, res) {
  try {
    const ingresos = await Ingreso.findAll();
    res.json(ingresos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
