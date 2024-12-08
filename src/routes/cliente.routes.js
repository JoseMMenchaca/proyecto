import { Router } from "express";
import {createCliente,
        getClientes,
        updateCliente} from "../controllers/cliente.controller.js"

const router = Router();

router.get("/clientes", getClientes);
// router.delete("/clientes/:cliente_id");
router.post("/clientes", createCliente);
router.put("/clientes/:cliente_id", updateCliente);

export default router;