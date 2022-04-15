'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/adaptiveDesign', {
        title: 'Адаптивный дизайн | ConsStudio',
        isServices: true,
        description: 'Разработаем дизайн веб-страниц, обеспечивающий правильное отображение сайта на различных устройствах: от самого маленького телефона до большого монитора.',
        robotsContent: 'all'
    });
});

module.exports = router;