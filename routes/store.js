'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('store', {
        title: 'Интернет магазин',
        isStore: true
    });
});

module.exports = router;