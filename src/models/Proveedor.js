import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Proveedor = sequelize.define(
  "proveedores",
  {
    idProveedor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre_contacto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    celular: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, // Valida formato de correo electrónico
      },
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false, // hacer campo obligatorio?
    },
  },
  {
    timestamps: false,
  }
);