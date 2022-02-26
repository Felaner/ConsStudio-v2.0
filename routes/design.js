'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('design', {
        title: 'Дизайн',
        isServices: true
    });
});

module.exports = router;