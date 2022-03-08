'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('addServices/creatingLogo', {
        title: 'Создание логотипа',
        isServices: true
    });
});

module.exports = router;