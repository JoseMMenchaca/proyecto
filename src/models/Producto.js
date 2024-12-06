import {DataTypes} from "sequelize";
import { sequelize } from "../database/db.js";

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
        precio_unitario:{
            type:DataTypes.DOUBLE,
            allowNull:false,
        },
        estado:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true,
        }
    },
    {
      timestamps: false,
    }
);