import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Ingreso } from "./Ingresos.js";
import { Venta } from "./Ventas.js";

// Definir el modelo Producto sin la relación a Categoria por ahora
export const Producto = sequelize.define(
  "productos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoria_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categorias", // Cambiar de Categoria a string del nombre de la tabla
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

// Relaciones con Ingreso y Venta
Producto.hasMany(Ingreso, {
  foreignKey: "producto_id",
  sourceKey: "id",
});
Ingreso.belongsTo(Producto, {
  foreignKey: "producto_id",
  targetKey: "id",
});

Producto.hasMany(Venta, {
  foreignKey: "producto_id",
  sourceKey: "id",
});
Venta.belongsTo(Producto, {
  foreignKey: "producto_id",
  targetKey: "id",
});

