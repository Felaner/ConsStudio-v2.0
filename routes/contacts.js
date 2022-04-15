'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('contacts', {
        title: 'Контакты | ConsStudio',
        isContacts: true,
        description: 'Наша студия базируется в г.Новосибирск. Наши контакты: Email - consstudio54@gmail.com, Телефон - +7(987)777-67-98. Свяжитесь с нами и мы реализуем ваш проект быстро и качественно.',
        robotsContent: 'all'
    });
});

module.exports = router;