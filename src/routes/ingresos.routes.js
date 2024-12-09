import { Router } from "express";

import {
  registrarIngreso,
  buscarIngreso,
  actualizarSaldo,
  listarIngresos,
} from "../controllers/ingresos.controller.js";

const router = Router();

router.post("/", registrarIngreso);
router.get("/:id", buscarIngreso);
router.put("/:id/actualizarSaldo", actualizarSaldo); // Ruta específica para actualizar saldo
router.get("/", listarIngresos);

export default router;