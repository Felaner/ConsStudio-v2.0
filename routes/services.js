'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('services', {
        title: 'Услуги | ConsStudio',
        isServices: true,
        description: 'Специалисты ConsStudio предоставляют услуги разных направлений: от создания простого, стильного лендинга и фотомонтажа до крупных интернет-магазинов и 3D визуализации.',
        robotsContent: 'all'
    });
});

module.exports = router;