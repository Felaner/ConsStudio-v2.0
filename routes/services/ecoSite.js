'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services/ecoSite', {
        title: 'Эконом-сайт | ConsStudio',
        isServices: true,
        description: 'Разработаем недорогую онлайн-площадку, предназначенную для информирования и привлечения клиентов, формирования положительного образа компании в сознании целевой аудитории, взаимодействия с бизнес-партнерами, потребителями товаров и услуг.',
        robotsContent: 'all'
    });
});

module.exports = router;