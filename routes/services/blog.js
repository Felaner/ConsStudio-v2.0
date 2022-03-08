'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/blog', {
        title: 'Блог',
        isServices: true
    });
});

module.exports = router;