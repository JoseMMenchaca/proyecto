import express from "express"; 
import morgan from "morgan";
import { sequelize } from "./database/db.js";
import indexRoutes from "./routes/index.js";
import multer from "multer"; // Importar multer
import path from "path"; // Importar path
import { fileURLToPath } from "url";

import categoriaRoutes from "./routes/categoria.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";
import proveedorRoutes from "./routes/proveedor.routes.js";
import ventaRoutes from "./routes/venta.routes.js";
import ingresosRoutes from "./routes/ingresos.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import empleadoRoutes from "./routes/empleado.routes.js";

// Crear la instancia de la aplicación
const app = express();

// Configuraciones
app.set("port", process.env.PORT || 3000); // Define el puerto para el servidor

// Middlewares
app.use(morgan("dev")); // Para logging de las solicitudes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Definir __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de multer para subir archivos
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"), // Carpeta 'uploads' en la raíz del proyecto
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Nombre único para cada archivo
  },
});

const upload = multer({ storage });

// Servir la carpeta 'uploads' como estática
app.use("/uploads", express.static(path.join(__dirname, "../uploads"))); // Acceder a archivos subidos

// Usar rutas
app.use(indexRoutes); 
app.use("/api/categoria", categoriaRoutes); // Rutas de categorías
app.use("/api/productos", productoRoutes);  // Rutas productos
app.use("/api", clienteRoutes);
app.use("/api", ventaRoutes);
app.use("/api/proveedor", proveedorRoutes);
app.use("/api/ingresos", ingresosRoutes); // Rutas de ingresos
app.use("/api/usuarios", usuarioRoutes); // Rutas de usuarios

// Ruta para cargar archivos (ejemplo para productos)
app.post("/api/productos/upload", upload.single("imagen"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No se subió ningún archivo" });
  }
  res.status(200).json({ 
    message: "Archivo subido exitosamente", 
    filePath: `/uploads/${req.file.filename}` // Ruta accesible desde el frontend
  });
});

// Iniciar el servidor
try {
  app.listen(app.get("port"), () => {
    console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
  });
} catch (error) {
  console.error("Error al conectar al servidor", error);
}

// Sincronizar la base de datos
sequelize
  .sync({ alter: true }) // Esto eliminará y recreará las tablas
  .then(() => {
    console.log("Tablas sincronizadas");
  })
  .catch((error) => {
    console.error("Error al sincronizar las tablas:", error);
  });

// sequelize.sync({ force: false }).then(() => {
//   console.log("Base de datos sincronizada");
// }).catch(error => {
//   console.error("Error al sincronizar la base de datos", error);
// });

