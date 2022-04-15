'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/siteCard', {
        title: 'Сайт визитка | ConsStudio',
        isServices: true,
        description: 'Основная цель данного сайта – предоставить пользователю основной перечень информации о компании или частном лице. Специалисты ConsStudio разработают для вас стильный сайт, который будет представлять вас в интернете.',
        robotsContent: 'all'
    });
});

module.exports = router;