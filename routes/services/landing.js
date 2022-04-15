'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/landing', {
        title: 'Landing-page | ConsStudio',
        isServices: true,
        description: 'Разработаем стильный одностраничный сайт, предназначенный для усиления эффективности рекламы и увеличения аудитории.',
        robotsContent: 'all'
    });
});

module.exports = router;