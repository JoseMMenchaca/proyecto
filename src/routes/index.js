const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.json({ 'Software': 'Gestión de Ferretería' });
});

module.exports = router;
