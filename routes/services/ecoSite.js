'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/ecoSite', {
        title: 'Эконом-сайт',
        isServices: true
    });
});

module.exports = router;