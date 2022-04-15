'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/reDesign', {
        title: 'Редизайн сайта | ConsStudio',
        isServices: true,
        description: 'Если вам кажется, что сайт выглядит не современно, если у вас падает конверсия, если ваш сайт не имеет адаптивной или мобильной версии, мы разработаем вам новый дизайн и функционал для вашего сайта.',
        robotsContent: 'all'
    });
});

module.exports = router;