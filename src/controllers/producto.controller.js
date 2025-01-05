import { Producto } from "../models/Producto.js";
import { IngresoDetalle } from "../models/IngresoDetalles.js";

export async function listarProductos( req, res){
    try{
        const productos=await Producto.findAll({
            attributes:['id','nombre','descripcion','categoria_id'],
        });
        res.json(productos);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function crearProducto(req, res){
    const {nombre,descripcion,stock,categoria_id } = req.body;
    try{
        const newProducto=await Producto.create({
            nombre,
            descripcion,
            stock,
            categoria_id,
            
        },{
            fields:['nombre','descripcion','stock','categoria_id',]
        });
        res.status(201).json(newProducto);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function verProducto(req, res){
    const {id}=req.params;
    try{
        const producto= await Producto.findOne({
            where:{id}
        });
        res.status(201).json(producto);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function actualizarProducto(req, res){
    const {id}=req.params;
    const {nombre, descripcion,stock,categoria_id} = req.body;

    try{
        const producto=await Producto.findByPk(id);
        producto.nombre=nombre;
        producto.descrpcion=descripcion;
        producto.stock=stock;
        producto.categoria_id=categoria_id;
        await producto.save();
        
        res.status(201).json(producto);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function verPrecioProducto(req, res){
    const {id}=req.params;
    try{
        const producto= await Producto.findOne({
            where:{id},
            include:{
                model: IngresoDetalle,
                attributes: ['precioVenta'] // Solo obtener el campo 'titulo' de los posts
              }
        }
    );
   
        res.status(201).json(producto);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}