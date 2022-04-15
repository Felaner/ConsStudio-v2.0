'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('portfolio', {
        title: 'Портфолио | ConsStudio',
        isPortfolio: true,
        description: 'Портфолио нашей студии. В данном разделе представлены сайты, созданные нашими специалистами. Более подробная информация по каждой работе находится на этой странице.',
        robotsContent: 'all'
    });
});

module.exports = router;