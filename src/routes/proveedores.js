const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const proveedor = require('../../sample.json');

router.get('/', (req, res) => {
    //res.send('------------proveedores');
    res.json(proveedor);
})

router.post('/', (req, res) => {
    const { idProveedor, nombre, nombre_contacto, direccion, telefono, celular, email, estado } = req.body;
    console.log(req.body);
    console.log('-------------bienvenido:  ', idProveedor, nombre);

    //res.send('recibido');

    // insertar a la BDD
    const newProveedor = { ...req.body }
    proveedor.push(newProveedor);

    res.json(proveedor);

    //res.send('------insertado');
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(proveedor, (xproveedor, i) => {
        console.log('?=', id, '---', i, proveedor.idProveedor, 'x=', xproveedor.idProveedor);
        if (xproveedor.idProveedor == id) {
            console.log('---------------------------------------------borrando:  ', xproveedor.idProveedor, xproveedor.nombre);
            proveedor.splice(i, 1);
        }
    });
    res.send('.................eliminado');
})


router.put('/:id', (req, res) => {
    const { id } = req.params;
    //const { idProveedor, nombre, nombre_contacto, direccion, telefono, celular, email, estado } = req.body;
    _.each(proveedor, (xproveedor, i) => {
        console.log('?=', id, '---', i, proveedor.idProveedor, 'x=', xproveedor.idProveedor);
        console.log('?=', id);
        if (xproveedor.idProveedor == id) {
            console.log('____________________________________actualizado:  ', xproveedor.idProveedor, xproveedor.nombre);
            //xproveedor.estado="--Baja";
            proveedor.estado = "--Baja";

            //proveedor.splice(i, 1);

        }
    });
    res.send('-----actualizado');
})

module.exports = router;
