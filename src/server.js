import express from "express";
import morgan from "morgan";
import { sequelize } from "./database/db.js";
import indexRoutes from "./routes/index.js";
import categoriaRoutes from "./routes/categoria.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";
import proveedorRoutes from "./routes/proveedor.routes.js";
import ventaRoutes from "./routes/venta.routes.js";
import ingresosRoutes from "./routes/ingresos.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import empleadoRoutes from "./routes/empleado.routes.js"

// Crear la instancia de la aplicación
const app = express();
// Configuraciones
app.set("port", process.env.PORT || 3000); // Define el puerto para el servidor

// Middlewares
app.use(morgan("dev")); // Para logging de las solicitudes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(indexRoutes); // Usar rutas
app.use("/api/categoria", categoriaRoutes); // Rutas de categorías
app.use("/api/productos", productoRoutes);  //rutas productos
app.use("/api", clienteRoutes);
app.use("/api", ventaRoutes);
app.use("/api/proveedor", proveedorRoutes);
app.use("/api/ingresos", ingresosRoutes); // Rutas de ingresos
app.use("/api/usuarios", usuarioRoutes); // Rutas de ingresos

// Iniciar el servidor

try {

  app.listen(4000);
  console.log("Conexión exitosa a la base de datos MySQL", 3306);
} catch (error) {
  console.error("Error al conectar a la base de datos", error);
}

sequelize
  .sync({ alter: true }) // Esto eliminará y recreará las tablas
  .then(() => {
    console.log("Tablas sincronizadas");
  })
  .catch((error) => {
    console.error("Error al sincronizar las tablas:", error);
  });

app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
