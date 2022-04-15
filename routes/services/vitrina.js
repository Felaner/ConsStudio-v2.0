'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/vitrina', {
        title: 'Интернет-каталог | ConsStudio',
        isServices: true,
        description: 'Разработаем для Вас электронный каталог с карточками товаров для ознакомления клиента. Каждый товар содержит фото/видео, описание и характеристики. Сайт включает в себя возможность оставить заявку.',
        robotsContent: 'all'
    });
});

module.exports = router;