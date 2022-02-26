'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('policy', {
        title: 'Политика конфиденциальности',
        isPolicy: true
    });
});

module.exports = router;