const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// rutas
app.use(require('./routes/index'));

app.use('/api/proveedores', require('./routes/Proveedores'));

//iniciando servidor
app.listen(app.get('port'), () => {
    console.log("servicio arriba ", app.get('port'));
});
