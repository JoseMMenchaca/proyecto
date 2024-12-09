import { Router } from "express";
import {createCliente,
        getClientes,
        updateCliente,
        getCliente,
        getClienteCompras} from "../controllers/cliente.controller.js"

const router = Router();

router.get("/clientes", getClientes);
router.post("/clientes", createCliente);
router.put("/clientes/:cliente_id", updateCliente);
//mostrar un solo registro
router.get("/clientes/:cliente_id", getCliente);
//mostrar compras de un cliente
router.get("/clientes/:cliente_id/ventas", getClienteCompras);

export default router;