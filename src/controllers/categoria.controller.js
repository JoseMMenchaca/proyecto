import { Categoria } from "../models/Categoria.js";
import { Producto } from "../models/Producto.js";

export async function listarCategorias( req, res){
    try{
        const categorias=await Categoria.findAll({
            attributes:['id','nombre','usuario_id'],
        });
        res.json(categorias);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function crearCategoria(req, res){
    const {nombre,usuario_id} = req.body;
    try{
        const newCategoria=await Categoria.create({
            nombre,
            usuario_id,
            
        },{
            fields:['nombre','usuario_id']
        });
        res.status(201).json(newCategoria);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function verCategoria(req, res){
    const {id}=req.params;
    try{
        const categoria= await Categoria.findOne({
            where:{id}
        });
        res.status(201).json(categoria);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function actualizarCategoria(req, res){
    const {id}=req.params;
    const {nombre, usuario_id} = req.body;

    try{
        const categoria=await Categoria.findByPk(id);
        categoria.nombre=nombre;
        categoria.usuario_id=usuario_id;

        await categoria.save();
        
        res.status(201).json(categoria);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

