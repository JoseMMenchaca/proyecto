import { Router } from "express";
import {
  registrarProveedor,
  buscarProveedor,
  editarProveedor,
} from "../controllers/proveedor.controller.js";
const router = Router();

//router.get('/',listarProveedor);
router.post("/", registrarProveedor);
router.get("/:id", buscarProveedor);
router.put("/:id", editarProveedor);

export default router;
