import {DataTypes} from "sequelize"
import { sequelize } from "../database/db.js";
import { Producto } from "./Producto.js";

export const Categoria=sequelize.define(
    'categorias',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },
    {
      timestamps: false,
    }
);

Categoria.hasMany(Producto, {
    foreignKey:'categoria_id',
    sourceKey:'id',
});
Producto.belongsTo(Categoria,{
    foreignKey:'categoria_id',
    targetKey:'id',
});