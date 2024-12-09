import { DataTypes, ForeignKeyConstraintError } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Venta } from './venta.model.js'

export const Cliente = sequelize.define(
    'clientes', 
    {
    cliente_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_cliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    celular: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    estado: {
        type:DataTypes.BOOLEAN,
        defaultValue:true,
    },
    estadoCredito: {
        type:DataTypes.BOOLEAN,
        defaultValue:true,
    },
}, {
    timestamps: true,
    tableName: 'clientes',
});

Cliente.hasMany(Venta, {
    foreignKey: 'clienteId',
    sourceKey: 'cliente_id'
});

Venta.belongsTo(Cliente, {
    foreignKey: 'clienteId',
    targetId: 'cliente_id'
})
export default Cliente;