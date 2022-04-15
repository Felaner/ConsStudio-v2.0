'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/corporate', {
        title: 'Корпоративный сайт | ConsStudio',
        isServices: true,
        description: 'Разработаем для вас корпоративный сайт, который предназначен для хранения информации о компании. Такой сайт является представительством фирмы в интернете. Сайт отличается своей многофункциональностью. В его задачи входит донесение информации до каждого клиента и достижение коммерческих целей.',
        robotsContent: 'all'
    });
});

module.exports = router;