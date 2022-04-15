'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('policy', {
        title: 'Политика конфиденциальности | ConsStudio',
        isPolicy: true,
        description: 'Настоящая Политика конфиденциальности персональных данных студии веб-разработки ConsStudio.',
        robotsContent: 'none'
    });
});

module.exports = router;