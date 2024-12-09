import { Router } from "express";
import {getVentas,
        createVenta,
        updateVenta,
        getVenta} from "../controllers/venta.controller.js"

const router = Router();

router.get("/ventas", getVentas);
router.post("/ventas", createVenta);
router.put("/ventas/:venta_id", updateVenta);
//mostrar un solo registro
router.get("/ventas/:venta_id", getVenta);

export default router;