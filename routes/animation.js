'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('animation', {
        title: 'Анимация | ConsStudio',
        isContacts: true,
        description: 'Анимация'
    });
});

module.exports = router;