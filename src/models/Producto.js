import {DataTypes} from "sequelize";
import { sequelize } from "../database/db.js";
import { IngresoDetalle } from "./IngresoDetalles.js";
import { Venta } from "./Ventas.js";

export const Producto=sequelize.define(
    'productos',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        descripcion:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        stock:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        imagen:{
            type:DataTypes.STRING,
            allowNull:true,
        }
    },
    {
      timestamps: false,
    }
);


Producto.hasMany(IngresoDetalle, {
    foreignKey:'producto_id',
    sourceKey:'id',
  });
  IngresoDetalle.belongsTo(Producto,{
    foreignKey:'producto_id',
    targetKey:'id',
  });

  Producto.hasMany(Venta, {
    foreignKey:'producto_id',
    sourceKey:'id',
  });
  Venta.belongsTo(Producto,{
    foreignKey:'producto_id',
    targetKey:'id',
  });
  