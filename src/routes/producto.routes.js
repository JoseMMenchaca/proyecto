import { Router } from "express";
import { crearProducto, listarProductos,verProducto,actualizarProducto,verPrecioProducto} from "../controllers/producto.controller.js";
const router =Router();

router.get('/',listarProductos);
router.post('/',crearProducto);
router.get('/:id', verProducto);
router.get('/precio/:id', verPrecioProducto);
router.put('/:id',actualizarProducto);


export default router;