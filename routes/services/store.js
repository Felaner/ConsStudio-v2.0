'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/store', {
        title: 'Интернет магазин | ConsStudio',
        isServices: true,
        description: 'Разработаем онлайн магазин, который служит для представления продуктов, где покупатель может выбрать и оплатить товар. Сайт подойдет компаниям, организациям или частным людям, которые хотят повысить конверсию и привлечь больше клиентов.',
        robotsContent: 'all'
    });
});

module.exports = router;