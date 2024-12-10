import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Producto } from "./Producto.js";

export const Ingreso = sequelize.define(
  "ingresos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechaIngreso: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    montoTotal: {
      type: DataTypes.FLOAT,
      allowNull:false,
    },
  },
  {
    timestamps: false,
  }
);

