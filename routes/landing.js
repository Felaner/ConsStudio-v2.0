'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('landing', {
        title: 'Landing-page',
        isLanding: true
    });
});

module.exports = router;