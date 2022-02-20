'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('portfolio', {
        title: 'Портфолио',
        isPortfolio: true
    });
});

module.exports = router;