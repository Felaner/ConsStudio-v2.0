'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('blog', {
        title: 'Блог',
        isBlog: true
    });
});

module.exports = router;