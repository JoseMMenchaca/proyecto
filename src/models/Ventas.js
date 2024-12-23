import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const Venta = sequelize.define(
    'ventas', 
    {
    id: {
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
    timestamps: false,
});



