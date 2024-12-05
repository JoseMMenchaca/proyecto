const { Router } = require('express');
const router = Router();
const _ = require('underscore');

//lista json de ejemplos
const proveedor = require('../../sample.json');

//listado general
router.get('/', (req, res) => {
    //res.send('------------proveedores');
    res.json(proveedor);
})

//lista registro
router.get('/:id', (req, res) => {
    const { id } = req.params;
    _.each(proveedor, (xproveedor, i) => {
        console.log('?=', id, '---', i, proveedor[i].idProveedor, 'x=', xproveedor.idProveedor);
        if (xproveedor.idProveedor == id) {
            console.log('---------------------------------------------ubicado :  ', xproveedor.idProveedor, xproveedor.nombre);
            res.json(proveedor[i]);
        }
    });
})

//Inserta nuevo registro
router.post('/', (req, res) => {
    const { idProveedor, nombre, nombre_contacto, direccion, telefono, celular, email, estado } = req.body;
    console.log(req.body);
    console.log('-------------registro recibido :  ', idProveedor, nombre);

    // insertar a la BDD
    const newProveedor = { ...req.body }
    proveedor.push(newProveedor);

    res.json(newProveedor);

})

//Baja al registro
router.put('/:id', (req, res) => {
    const { id } = req.params;
    //const { idProveedor, nombre, nombre_contacto, direccion, telefono, celular, email, estado } = req.body;
    _.each(proveedor, (xproveedor, i) => {
        console.log('?=', id, '---', i, proveedor[i].idProveedor, 'x=', xproveedor.idProveedor);
        console.log('?=', id);
        if (xproveedor.idProveedor == id) {
            console.log('____________________________________actualizado:  ', proveedor[i].idProveedor, xproveedor.nombre);
            proveedor[i].estado = "--Baja";
        }
    });
    res.send('-----dado de baja');
})

// Eliminar registro
// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     //var _i = 0;
//     _.each(proveedor, (xproveedor, i) => {
//         console.log('?=', id, '---', i, proveedor[i].idProveedor, 'x=', xproveedor.idProveedor);
//         if (xproveedor.idProveedor == id) {
//             console.log('---------------------------------------------borrando:  ', xproveedor.idProveedor, xproveedor.nombre);
//             proveedor.splice(i, 1);
//             //_i = i;
//         }
//         //console.log('=== ', _i);
//     });
//     //proveedor.splice(_i, 1);
//     res.send('.................eliminado: ', _i);
// })

module.exports = router;
