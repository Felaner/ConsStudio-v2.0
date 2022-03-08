'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('addServices/3dVisual', {
        title: '3D визуализация',
        isServices: true
    });
});

module.exports = router;