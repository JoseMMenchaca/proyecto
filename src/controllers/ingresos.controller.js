import { Ingreso } from "../models/Ingresos.js";

// Función registrar nuevo ingreso
export async function registrarIngreso(req, res) {
  const { lote, cantidad, precio, precioVenta, saldoProducto } = req.body;

  try {
    const newIngreso = await Ingreso.create({
      lote,
      cantidad,
      precio,
      precioVenta,
      saldoProducto,
    });
    res.status(201).json(newIngreso);
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
