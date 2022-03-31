import { lending, siteCard, corporate, store, vitrina, blog } from './quest.js';

let siteTypes = [
    {
        num: 0,
        question: 'Какая услуга Вам необходима?',
        answers: [
            {text: 'Landing-page', obj: lending},
            {text: 'Сайт-визитка', obj: siteCard},
            {text: 'Корпоративный сайт', obj: corporate},
            {text: 'Интернет магазин', obj: store},
            {text: 'Сайт-каталог', obj: vitrina},
            {text: 'Блог', obj: blog},
            {text: 'Эконом сайт'},
            {text: 'Дизайн сайта'},
            {text: 'Редизайн сайта'},
            {text: 'Другое'},
        ],
        type: 'radio'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.indexOf("brief") > -1) {

        const questBox = document.querySelector('.question-box')
        const next = document.querySelector('.next-question')
        const prev = document.querySelector('.prev-question')

        let questNumber = 0
        let errors = false
        let numInMass = 0

        firstQuestion()

        prev.disabled = true

        next.addEventListener('click', function () {
            let clientAnswer
            let formControl
            let nextQuest = null
            if (questBox.querySelector('input[type=radio]')) {
                if (questBox.querySelector('input[type=radio]:checked')) {
                    let radioInput = questBox.querySelector('input[type=radio]:checked')
                    clientAnswer = radioInput.value
                    if (radioInput.hasAttribute('data-next')) {
                        nextQuest = radioInput.getAttribute('data-next')
                    } else {
                        nextQuest = null
                    }
                    errors = false
                } else {
                    errors = true
                }
            } else if (questBox.querySelector('input[type=text]')) {
                formControl = questBox.querySelector('input[type=text]')
                if (formControl.value !== '') {
                    clientAnswer = questBox.querySelector('input').value
                    errors = false
                } else {
                    errors = true
                }
            } else if (questBox.querySelector('textarea').value !== '') {
                formControl = questBox.querySelector('textarea')
                if (formControl.value !== '') {
                    clientAnswer = questBox.querySelector('textarea').value
                    errors = false
                } else {
                    errors = true
                }
            } else {
                errors = true
            }
            if (!errors) {
                numInMass++
                questNumber++
                prev.disabled = false
                nextQuestion(questNumber, clientAnswer, nextQuest)
                if (typeof(nextQuest) !== "undefined" && nextQuest !== null) {
                    questNumber = nextQuest
                }
            } else {
                console.log('Ответьте на вопрос')
            }
        })
        prev.addEventListener('click', function () {
            let prevQuest = null
            for (let i = clientAnswers.length - 1; i > 0; i--) {
                if (clientAnswers[i].questNum === document.querySelector('.iterator span').innerHTML - 2) {
                    prevQuest = clientAnswers[i].questNum - 1
                    break
                } else if (clientAnswers[i].questNum === document.querySelector('.iterator span').innerHTML - 1) {
                    prevQuest = clientAnswers[i].questNum
                    break
                }
            }
            numInMass--
            if (prevQuest !== null) {
                questNumber = prevQuest
            } else {
                questNumber--
            }
            if (questNumber === 0) {
                prev.disabled = true
            }
            nextQuestion(questNumber, null, null, numInMass)
        })
    }
})

let clientAnswers = []

function firstQuestion() {

    // Получение блоков с "Варианты ответов", "Вопрос", "Номер вопроса"

    const questBox = document.querySelector('.question-box')
    const question = document.querySelector('.question')
    const questNumber = document.querySelector('.iterator')


    // В блок с вопросом вносится первый вопрос (тип сайта)
    question.innerHTML = siteTypes[0].question

    // Блок с "Варианты ответов" чистится
    questBox.innerHTML = ''

    // Блок с "Номер вопроса" чистится
    questNumber.innerHTML = ''

    // Задается переменная "Прошлый ответ"
    let prevAnsw = ''

    // Если в массиве ответов уже есть ответ на первый вопрос
    if (clientAnswers[0]) {
        // Переменной "Прошлый ответ" присваивается ответ
        prevAnsw = clientAnswers[0].answ
    }

    // Перебор вариантов ответа на первый вопрос
    siteTypes[0].answers.forEach(el => {
        // Переменная "выбрано"
        let checked = ''
        // Если ответ на текущий вопрос уже был
        if (prevAnsw === el.text) {
            // Переменной "выбрано" присваивается значение "выбрано"
            checked = 'checked'
        }
        // --> и если ответ уже был, input radio будет выбран
        questBox.innerHTML += `<div class="col-12 col-md-6"><label><input type="radio" name="q0" value="${el.text}" ${checked}><span>${el.text}</span></label></div>`
    })
}

function nextQuestion(num, clientAnswer, nextQuest, numInMass) {

    // Получение блоков с "Варианты ответов", "Вопрос", "Номер вопроса"

    const questBox = document.querySelector('.question-box')
    const question = document.querySelector('.question')
    const questNumber = document.querySelector('.iterator')

    // Переменная тип сайта

    let siteType

        // Если прошлый вопрос о типе сайта и есть ответ на вопрос

    if (num === 1 && clientAnswer) {
        if (clientAnswers[0]) {
            // Если ответ на первый вопрос разниться с прошлым ответом на вопрос массив ответов обнуляется
            if (clientAnswers[0].answ !== clientAnswer) {
                clientAnswers.length = 0
            }
        }
            // Присвоение переменной типа сайта значения в зависимости от ответа на первый вопрос
        siteType = siteTypes[0].answers.find(el => el.text === clientAnswer)
        // Иначе если прошлый вопрос не является вопросом о типе сайта
    } else {
            // Присвоение переменной типа сайта значения в зависимости от ответа на первый вопрос, который берется из массива ответов
        siteType = siteTypes[0].answers.find(el => el.text === clientAnswers[0].answ)
    }

    if (num > siteType.obj.length) {
        const next = document.querySelector('.next-question')
        const prev = document.querySelector('.prev-question')
        const captcha = document.querySelector('.captcha-box')
        const submitBtn = document.querySelector('.submit-box')
        next.style.display = 'none'
        prev.style.display = 'none'
        questBox.style.display = 'none'
        questNumber.innerHTML = 'Последний вопрос'
        question.innerHTML = 'Вы робот? Если нет, подтвердите это, пройдя капчу'
        captcha.classList.remove('d-none')
        submitBtn.classList.remove('d-none')
        return
    }

    // Переменная прошлый ответ
    let prevAnsw = ''
    // Если в массиве ответов есть ответ с текущем номером вопроса
    if (numInMass) {
        if (clientAnswers[numInMass]) {
            // Переменной прошлый ответ присваевается ответ на текущий вопрос
            prevAnsw = clientAnswers[numInMass].answ
        }
    } else {
        if (clientAnswers[num]) {
            // Переменной прошлый ответ присваевается ответ на текущий вопрос
            prevAnsw = clientAnswers[num].answ
        }
    }

    // Если номер вопроса 0 (вопрос о типе сайта) выполняется функция "первый вопрос" и выход из функции
    if (num === 0) {
        firstQuestion()
        return
    }

    // Переменная общее количество вопросов. Берется количество вопросов массива, в зависимости от выбранного типа сайта
    let questTotal = siteType.obj.length

    // Если номер вопроса 0 (вопрос о типе сайта), блок с номером вопроса и общим количеством вопросов устанавливается пустым
    if (num === 0) {
        questNumber.innerHTML = ''
    } else {
        // Иначе Если переменная следущий вопрос не равняется "undefined" и не равняется "null"
        if (typeof(nextQuest) !== "undefined" && nextQuest !== null) {
            // Номер вопроса устанавливается равным значению переменной "nextQuest"
            questNumber.innerHTML = `Вопрос <span>${nextQuest}</span> из ${questTotal}`
            // Массив ответов изменяется: удаляются ответы после текущего номера вопроса
            clientAnswers.splice(num, 1000)
        } else {
            // Иначе номер вопроса устанавливается равным значением текущего номера вопроса, переменной "num"
            questNumber.innerHTML = `Вопрос <span>${num}</span> из ${questTotal}`
        }
    }

    // Если есть ответ на прошлый вопрос
    if (clientAnswer) {
        // Переменной "найдено" присваивается значение "не правда"
        let find = false
        // Перебор массива ответов на вопросы
        clientAnswers.forEach((el, i) => {
            // Если ответ на прошлый вопрос уже есть
            if (el.questNum === num)  {
                // Ответ заменяется на ответ на прошлый вопрос
                clientAnswers[i].answ = clientAnswer
                // Переменной "найдено" присваивается значение "правда"
                find = true
            }
        })
        // Если ответа на прошлый вопрос нет
        if (!find) {
            // В массив с ответами добавляется номер вопроса, вопрос и ответ на прошлый вопрос
            clientAnswers.push({questNum: siteType.obj[num - 1].num, quest: question.innerHTML, answ: clientAnswer})
        }
    }

    // Блок с вариантами ответов чистится
    questBox.innerHTML = ''
    // В блок с вопросом помещается текущий вопрос
    if (typeof(nextQuest) !== "undefined" && nextQuest !== null) {
        num = nextQuest
    }
    question.innerHTML = siteType.obj[num - 1].question
    // Задается переменная "тип вопроса", значение которой является типом вопрос (radio, input или textarea)
    let questType = siteType.obj[num - 1].type
    // Если тип вопроса равняется "radio"
    if (questType === 'radio') {
        // Если на текущий вопрос есть варианты ответов
        if (siteType.obj[num].answers) {
            // Если у текущего вопроса есть разветление
            if (siteType.obj[num].answers[0].nextQuest) {
                // Массив ответов изменяется: удаляются все ответы после текущего
                clientAnswers.length = num - 1
            }
        }
        // Перебор массива ответов текущего вопроса
        siteType.obj[num - 1].answers.forEach(el => {
            // Переменная "следующий вопрос"
            let nextQuest = ''
            // Если у ответа есть разветление
            if (el.nextQuest) {
                // Переменной "следующий вопрос" присваивается значение "дата-аттрибут", который содержит номер следующего вопроса
                nextQuest = `data-next=${el.nextQuest[0]}`
            }
            // Переменная "выбрано"
            let checked = ''
            // Если ответ на текущий вопрос уже был
            if (prevAnsw === el.text) {
                // Переменной "выбрано" присваивается значение "выбрано"
                checked = 'checked'
            }
            // --> и если ответ уже был, input radio будет выбран
            questBox.innerHTML += `<div class="col-12 col-md-6"><label><input type="${questType}" name="q${num}" value="${el.text}" ${checked} ${nextQuest}><span>${el.text}</span></label></div>`
        })
    } else if (questType === 'textarea') {
        questBox.innerHTML += `<div class="col-12 d-flex justify-content-center"><textarea>${prevAnsw}</textarea></div>`
    } else if (questType === 'text') {
        questBox.innerHTML += `<div class="col-12 col-md-6 d-flex justify-content-center"><label class="w-50"><input class="w-100" type="${questType}" name="q${num}" value="${prevAnsw}"></label></div>`
    } else {
        questBox.innerHTML += `<p>Такого типа нет</p>`
    }
    console.log(clientAnswers)
}