'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/blog', {
        title: 'Блог | ConsStudio',
        isServices: true,
        description: 'Разработаем для вас блог, в котором вы сможете делиться со своими читателями всем, чем только захотите. Вы сможете добавлять записи, изображения и мультимедиа.',
        robotsContent: 'all'
    });
});

module.exports = router;