import express from 'express';   // Asegúrate de que 'express' esté correctamente importado
import morgan from 'morgan';     // Asegúrate de que 'morgan' esté correctamente importado
import { sequelize } from './database/db.js';  // Importar tu configuración de Sequelize
import indexRoutes from './routes/index.js';  // Asegúrate de importar las rutas correctamente
import categoriaRoutes from './routes/categoria.routes.js'; // Otras rutas si las tienes
import clienteRoutes from './routes/cliente.router.js';
import './models/cliente.model.js';

// Crear la instancia de la aplicación
const app = express();
// Configuraciones
app.set('port', process.env.PORT || 3000);  // Define el puerto para el servidor

// Middlewares
app.use(morgan('dev'));  // Para logging de las solicitudes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use(indexRoutes);  // Usar rutas
app.use('/api/categoria', categoriaRoutes);  // Rutas de categorías
app.use('/api', clienteRoutes);

// Probar la conexión a la base de datos
// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Conexión exitosa a la base de datos MySQL');
//     } catch (error) {
//         console.error('Error al conectar a la base de datos:', error.message);
//         process.exit(1);  // Si no puede conectar, termina el proceso
//     }
// })();

// Iniciar el servidor

async() => {
    try {
        await sequelize.sync()
        app.listen(4000);
        console.log('Conexión exitosa a la base de datos MySQL', 4000);
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
    }
}

sequelize.sync() // Esto eliminará y recreará las tablas
    .then(() => {
        console.log("Tablas sincronizadas");
    })
    .catch((error) => {
        console.error("Error al sincronizar las tablas:", error);
    });

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});
