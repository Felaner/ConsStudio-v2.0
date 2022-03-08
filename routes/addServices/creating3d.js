'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('addServices/creating3d', {
        title: 'Создание 3D видео',
        isServices: true
    });
});

module.exports = router;