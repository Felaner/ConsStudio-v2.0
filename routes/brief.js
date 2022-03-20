'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('brief', {
        title: 'Бриф',
        isBrief: true
    });
});

module.exports = router;