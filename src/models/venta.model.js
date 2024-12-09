import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const Venta = sequelize.define(
    'ventas', 
    {
    venta_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    monto: {
        type: DataTypes.FLOAT(100, 2),
        allowNull: false,
    },
    metodoPago: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipoVenta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipoEntrega: {
        type: DataTypes.STRING,
        allowNull:false,
    },
}, {
    timestamps: true,
    tableName: 'ventas',
});

export default Venta;
// Registro de Ventas:
// ▪ Fecha y hora de la venta
// ▪ ID de venta
// ▪ Monto total
// ▪ Método de pago (efectivo, tarjeta, QR, etc.)
// ▪ Código del cliente (opcional para ventas online)
// ▪ Estado (cancelado, a crédito, etc.)
// ▪ Tipo de Venta (Físico, Online)
// ▪ Tipo de entrega (, A domicilio)
// o Notas de Venta:
// ▪ ID nota de venta
// ▪ ID de venta
// ▪ ID cliente
// ▪ ID de producto
// ▪ Cantidad de venta
// ▪ Precio unitario de venta del producto
// ▪ Precio Total de venta del producto