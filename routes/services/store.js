'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/store', {
        title: 'Интернет магазин',
        isServices: true
    });
});

module.exports = router;