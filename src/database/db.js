import Sequelize from "sequelize";
import dotenv from "dotenv";

// Carga las variables de entorno
dotenv.config();

// Crear la instancia de Sequelize
export const sequelize = new Sequelize(
    process.env.DB_NAME,       // Nombre de la base de datos
    process.env.DB_USERNAME,   // Usuario
    process.env.DB_PASSWORD,   // Contraseña
    {
        host: process.env.HOST,    // Host (generalmente localhost)
        dialect: "mysql",          // Tipo de base de datos
        logging: false,            // Desactiva los logs de las consultas
    }
);