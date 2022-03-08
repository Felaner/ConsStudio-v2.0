'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('addServices/creatingSlogan', {
        title: 'Создание слогана',
        isServices: true
    });
});

module.exports = router;