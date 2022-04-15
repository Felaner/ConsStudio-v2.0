'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');
const request = require('request');
const mailer = require('../mailer/mail');
const {EMAIL_TO, SECRET_KEY} = require('../keys/index');

router.get('/', (req, res) => {
    res.render('home', {
        title: 'ConsStudio - студия веб-разработки',
        isHome: true,
        description: 'Наша организация специфицируется на создании сайтов. Мы создадим для вас уникальный проект с нуля или же доработаем действующий. У нас работают лучшие специалисты, которые любят свое дело.',
        robotsContent: 'all'
    });
});

router.post('/call', (req, res) => {
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.sendStatus(501);
    }
    const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + SECRET_KEY + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    request(verificationURL, function (error, response, body) {
        body = JSON.parse(body);
        if (body.success !== undefined && !body.success) {
            return res.sendStatus(501);
        }
        try {
            if (!req.body) return res.sendStatus(400);
            const { callName, callPhone } = req.body
            const message = {
                to: EMAIL_TO,
                html: `<ul>` +
                    `<li>Имя: ${callName}</li>` +
                    `<li>Номер телефона: ${callPhone}</li>` +
                    `</ul>`,
                subject: 'С сайта ConsStudio заказали звонок!'
            };
            const mailto = new Promise(function (resolve, reject) {
                mailer(message)
                resolve()
            })
            mailto.then(result => {
                console.log('All OK')
                return res.sendStatus(200);
            }).catch(err => {
                return res.sendStatus(501);
            })
        } catch (e) {
            console.log(e);
        }
    })
})

router.post('/order', (req, res) => {
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.sendStatus(501);
    }
    const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + SECRET_KEY + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    request(verificationURL, function (error, response, body) {
        body = JSON.parse(body);
        if (body.success !== undefined && !body.success) {
            return res.sendStatus(501);
        }
        try {
            if (!req.body) return res.sendStatus(400);
            const { orderName, orderSecondName, orderEmail, orderPhone, orderService, orderText } = req.body
            const message = {
                to: EMAIL_TO,
                html: `<ul>` +
                    `<li>Имя: ${orderName} ${orderSecondName}</li>` +
                    `<li>Email: ${orderEmail}</li>` +
                    `<li>Номер телефона: ${orderPhone}</li>` +
                    `<li>Услуга: ${orderService}</li>` +
                    `<li>О проекте: ${orderText}</li>` +
                    `</ul>`,
                subject: 'С сайта ConsStudio пришел заказ!'
            };
            const mailto = new Promise(function (resolve, reject) {
                mailer(message)
                resolve()
            })
            mailto.then(result => {
                console.log('All OK')
                return res.sendStatus(200);
            }).catch(err => {
                return res.sendStatus(501);
            })
        } catch (e) {
            console.log(e);
        }
    })
})

module.exports = router;