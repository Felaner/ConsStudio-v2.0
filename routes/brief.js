'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');
const request = require('request');
const mailer = require('../mailer/mail');
const {EMAIL_TO, SECRET_KEY} = require('../keys/index');

router.get('/', (req, res) => {
    res.render('brief', {
        title: 'Бриф | ConsStudio',
        isBrief: true,
        description: 'Бриф на разработку сайта поможет нам понять Ваши цели и задачи. Мы будем лучше ориентироваться в Вашем проекте и быстрее оценим стоимость и сроки разработки. Заполните и отправьте его нам и, после ознакомления, мы с вами свяжемся',
        robotsContent: 'all'
    });
});

router.post('/', (req, res) => {
    console.log(req.body)
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
            const { contacts, answers } = req.body
            let htmlMess = `<h3>Контактные данные и о компании</h3><ul>`
            if (contacts.briefName) {
                htmlMess += `<li>Имя: ${contacts.briefName}`
                if (contacts.briefSecondName) {
                    htmlMess += ` ${contacts.briefSecondName}</li>`
                } else {
                    htmlMess += `</li>`
                }
            } if (contacts.briefPhone) {
                htmlMess += `<li>Номер телефона: ${contacts.briefPhone}</li>`
            } if (contacts.briefEmail) {
                htmlMess += `<li>Email: ${contacts.briefEmail}</li>`
            } if (contacts.briefCompany) {
                htmlMess += `<li>Название компании: ${contacts.briefCompany}</li>`
            } if (contacts.briefActualSite) {
                htmlMess += `<li>Сайт компании: ${contacts.briefActualSite}</li>`
            } if (contacts.briefAboutCompany) {
                htmlMess += `<li>Область деятельности, направления бизнеса: ${contacts.briefAboutCompany}</li>`
            } if (contacts.briefGeographic) {
                htmlMess += `<li>География работы: ${contacts.briefGeographic}</li>`
            }
            htmlMess += `</ul><br><h3>Бриф</h3><ul>`
            answers.forEach(el => {
                htmlMess += `<li>${el.quest}: ${el.answ}</li>`
            })
            htmlMess += `</ul>`
            const message = {
                to: EMAIL_TO,
                html: htmlMess,
                subject: 'На сайте ConsStudio заполнили бриф!'
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
});

module.exports = router;