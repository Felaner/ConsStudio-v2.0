'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/vitrina', {
        title: 'Интернет-витрина',
        isServices: true
    });
});

module.exports = router;