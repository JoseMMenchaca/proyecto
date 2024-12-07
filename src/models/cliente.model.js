import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Cliente = sequelize.define(
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

export default Cliente;

// async function tsConexion() {
//     try {
//         await sequelize.authenticate();
//         console.log("Conectado a la Base de Datos...");
//       } catch (error) {
//         console.error("La conexion fallo", error);
//       }
// }

// tsConexion();