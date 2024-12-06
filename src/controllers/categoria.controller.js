import { Categoria } from "../models/Categoria.js";
import { Producto } from "../models/Producto.js";

export async function getAllCategorias( req, res){
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

export async function createCategoria(req, res){
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

export async function getCategoria(req, res){
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

export async function updateCategoria(req, res){
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

export async function deleteCategoria(req,res){
    const {id}=req.params;
    try {
        await Producto.destroy({
            where: { categoria_id: id },
          }); 

 
        await Categoria.destroy({
          where: { id },
        });
        return res.sendStatus(204);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
}