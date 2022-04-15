'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/design', {
        title: 'Дизайн | ConsStudio',
        isServices: true,
        description: 'Создадим для вас стильный и современный дизайн сайта, веб-приложения, каталога и т.п. Спроектируем логическую структуру веб-страниц, продумаем наиболее удобные решения подачи информации.',
        robotsContent: 'all'
    });
});

module.exports = router;