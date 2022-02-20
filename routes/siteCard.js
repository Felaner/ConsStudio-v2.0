'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('siteCard', {
        title: 'Сайт визитка',
        isSiteCard: true
    });
});

module.exports = router;