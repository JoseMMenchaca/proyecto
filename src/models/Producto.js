import {DataTypes} from "sequelize";
import { sequelize } from "../database/db.js";
import { Ingreso } from "./Ingresos.js";

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
        }
    },
    {
      timestamps: false,
    }
);


Producto.hasMany(Ingreso, {
    foreignKey:'producto_id',
    sourceKey:'id',
  });
  Ingreso.belongsTo(Producto,{
    foreignKey:'producto_id',
    targetKey:'id',
  });
  