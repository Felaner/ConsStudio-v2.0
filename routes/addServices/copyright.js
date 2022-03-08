'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('addServices/copyright', {
        title: 'Копирайтинг',
        isServices: true
    });
});

module.exports = router;