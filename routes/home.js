'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');
const request = require('request');
const mailer = require('../mailer/mail');
const {EMAIL_TO, SECRET_KEY} = require('../keys/index');

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Главная',
        isHome: true
    });
});

router.post('/call', (req, res) => {
    // if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
    //     return res.sendStatus(501);
    // }
    // const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + SECRET_KEY + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // request(verificationURL, function (error, response, body) {
    //     body = JSON.parse(body);
    //     if (body.success !== undefined && !body.success) {
    //         return res.sendStatus(501);
    //     }
    //     try {
            if (!req.body) return res.sendStatus(400);
            console.log(JSON.parse(req.body))
            return res.sendStatus(200);
            // const message = {
            //     to: EMAIL_TO,
            //     html: `<ul>` +
            //         `<li>Имя: ${contactName}</li>` +
            //         `<li>Название организации: ${contactOrganization}</li>` +
            //         `<li>Контакты: ${contactContact}</li>` +
            //         `<li>Товар: ${contactProduct}</li>` +
            //         `<li>Количество: ${contactCount}</li>` +
            //         `<li>Когда: ${contactDate}</li>` +
            //         `<li>Адрес: ${contactAddress}</li>` +
            //         `</ul>`,
            //     subject: 'Новый заказ!'
            // };
            // const mailto = new Promise(function (resolve, reject) {
            //     mailer(message)
            //     resolve()
            // })
            // mailto.then(result => {
            //     console.log('All OK')
            //     return res.sendStatus(200);
            // }).catch(err => {
            //     return res.sendStatus(501);
            // })
    //     } catch (e) {
    //         console.log(e);
    //     }
    // })
})

module.exports = router;