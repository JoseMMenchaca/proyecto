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
