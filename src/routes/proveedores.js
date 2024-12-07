// const { Router } = require('express');
// const router = Router();
// const _ = require('underscore');

// //lista json de ejemplos
// const proveedor = require('../../sample.json');

// //listado general
// router.get('/', (req, res) => {
//     //res.send('------------proveedores');
//     res.json(proveedor);
// })

// //lista registro
// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     _.each(proveedor, (xproveedor, i) => {
//         console.log('?=', id, '---', i, proveedor[i].idProveedor, 'x=', xproveedor.idProveedor);
//         if (xproveedor.idProveedor == id) {
//             console.log('---------------------------------------------ubicado :  ', xproveedor.idProveedor, xproveedor.nombre);
//             res.json(proveedor[i]);
//         }
//     });
// })

// //Inserta nuevo registro
// router.post('/', (req, res) => {
//     const { idProveedor, nombre, nombre_contacto, direccion, telefono, celular, email, estado } = req.body;
//     console.log(req.body);
//     console.log('-------------registro recibido :  ', idProveedor, nombre);

//     // insertar a la BDD
//     const newProveedor = { ...req.body }
//     proveedor.push(newProveedor);

//     res.json(newProveedor);

// })

// //Baja al registro
// // router.put('/:id', (req, res) => {
// //     const { id } = req.params;
// //     //const { idProveedor, nombre, nombre_contacto, direccion, telefono, celular, email, estado } = req.body;
// //     _.each(proveedor, (xproveedor, i) => {
// //         console.log('?=', id, '---', i, proveedor[i].idProveedor, 'x=', xproveedor.idProveedor);
// //         console.log('?=', id);
// //         if (xproveedor.idProveedor == id) {
// //             console.log('____________________________________actualizado:  ', proveedor[i].idProveedor, xproveedor.nombre);
// //             proveedor[i].estado = "--Baja";
// //         }
// //     });
// //     res.send('-----dado de baja');
// // })

// //Actualizar registro
// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const { idProveedor, nombre, nombre_contacto, direccion, telefono, celular, email, estado } = req.body;
//     //console.log(req.body);
//     console.log('-------------registro recibido :  ', idProveedor, nombre);

//     _.each(proveedor, (xproveedor, i) => {
//         console.log('?=', id, '---', i, proveedor[i].idProveedor, 'x=', xproveedor.idProveedor);
//         console.log('?=', id);
//         if (xproveedor.idProveedor == id) {
//             console.log('____________________________________actualizado:  ', proveedor[i].idProveedor, xproveedor.nombre);

//             if (nombre !== null && nombre !== undefined && nombre.trim() !== "") {
//                 proveedor[i].nombre = nombre;
//                 console.log('nombre');
//             }
//             if (nombre_contacto !== null && nombre_contacto !== undefined && nombre_contacto.trim() !== "") {
//                 proveedor[i].nombre_contacto = nombre_contacto
//                 console.log('contacto');
//             };
//             if (direccion !== null && direccion !== undefined && direccion.trim() !== "") {
//                 proveedor[i].direccion = direccion
//                 console.log('direccion');
//             };
//             if (telefono !== null && telefono !== undefined && telefono.trim() !== "") {
//                 proveedor[i].telefono = telefono
//                 console.log('telefono');
//             };
//             if (celular !== null && celular !== undefined && celular.trim() !== "") {
//                 proveedor[i].celular = celular
//                 console.log('celular');
//             };
//             if (email !== null && email !== undefined && email.trim() !== "") {
//                 proveedor[i].email = email
//                 console.log('emai');
//             };

//             if (estado !== null && estado !== undefined && estado.trim() !== "") {
//                 //proveedor[i].estado = "--Baja";
//                 proveedor[i].estado = estado;
//                 console.log('estado');
//             }
//         }
//     });
//     res.send('-----actualizado');
// })


// // Eliminar registro
// // router.delete('/:id', (req, res) => {
// //     const { id } = req.params;
// //     //var _i = 0;
// //     _.each(proveedor, (xproveedor, i) => {
// //         console.log('?=', id, '---', i, proveedor[i].idProveedor, 'x=', xproveedor.idProveedor);
// //         if (xproveedor.idProveedor == id) {
// //             console.log('---------------------------------------------borrando:  ', xproveedor.idProveedor, xproveedor.nombre);
// //             proveedor.splice(i, 1);
// //             //_i = i;
// //         }
// //         //console.log('=== ', _i);
// //     });
// //     //proveedor.splice(_i, 1);
// //     res.send('.................eliminado: ', _i);
// // })

// module.exports = router;
