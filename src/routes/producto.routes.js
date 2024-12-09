import { Router } from "express";
import { crearProducto, listarProductos,verProducto,actualizarProducto} from "../controllers/producto.controller.js";
const router =Router();

router.get('/',listarProductos);
router.post('/',crearProducto);
router.get('/:id', verProducto);
router.put('/:id',actualizarProducto);


export default router;