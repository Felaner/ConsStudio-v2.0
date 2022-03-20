let brief = [
    {
        num: 0,
        question: 'Какая услуга Вам необходима?',
        answers: [
            {text: 'Landing-page', questTotal: '10'},
            {text: 'Сайт-визитка', questTotal: '11'},
            {text: 'Корпоративный сайт', questTotal: '12'},
            {text: 'Интернет магазин', questTotal: '13'},
            {text: 'Сайт-каталог', questTotal: '14'},
            {text: 'Блог', questTotal: '15'},
            {text: 'Эконом сайт', questTotal: '16'},
            {text: 'Дизайн сайта', questTotal: '17'},
            {text: 'Редизайн сайта', questTotal: '18'},
            {text: 'Другое', questTotal: '19'},
        ],
        type: 'radio'
    },
    {
        num: 1,
        question: 'Есть ли доменное имя для Вашего нового сайта?',
        answers: [
            {text: 'Да, есть'},
            {text: 'Нет, нужна помощь в выборе доменного имени'},
            {text: 'Нет, домен выберу сам(а)'}
        ],
        type: 'radio'
    },
    {
        num: 2,
        question: 'Основные Ваши услуги и/или продукты:',
        type: 'textarea'
    },
    {
        num: 3,
        question: 'Вопрос 3:',
        type: 'text'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.indexOf("brief") > -1) {

        const questBox = document.querySelector('.question-box')

        let questNumber = 0
        let errors = false

        nextQuestion(questNumber)

        const next = document.querySelector('.next-question')
        const prev = document.querySelector('.prev-question')

        prev.disabled = true

        next.addEventListener('click', function () {
            let clientAnswer
            let formControl
            if (questBox.querySelector('input[type=radio]')) {
                if (questBox.querySelector('input[type=radio]:checked')) {
                    clientAnswer = questBox.querySelector('input[type=radio]:checked').value
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
                questNumber++
                prev.disabled = false
                nextQuestion(questNumber, clientAnswer)
            } else {
                console.log('Ответьте на вопрос')
            }
        })
        console.log(questNumber)
        prev.addEventListener('click', function () {
            questNumber--
            if (questNumber === 0) {
                prev.disabled = true
            }
            prevQuestion(questNumber)
        })
    }
})

let clientAnswers = []

function nextQuestion(num, clientAnswer) {
    const questBox = document.querySelector('.question-box')
    const question = document.querySelector('.question')
    const questNumber = document.querySelector('.iterator')

    let questTotal

    if (questNumber.querySelector('span')) {
        questTotal = questNumber.querySelector('span').innerHTML
    }

    if (clientAnswer) {
        let find = false
        clientAnswers.forEach((el, i) => {
            if (el.questNum === brief[num].num - 1)  {
                clientAnswers[i].answ = clientAnswer
                find = true
            }
        })
        if (!find) {
            clientAnswers.push({questNum: brief[num].num - 1, quest: question.innerHTML, answ: clientAnswer})
        }

        if (num === 1) {
            questTotal = brief[0].answers.find(ans => ans.text === clientAnswer).questTotal
        }

        questNumber.innerHTML = `Вопрос ${num} из <span>${questTotal}</span>`
    }

    questBox.innerHTML = ''
    question.innerHTML = brief[num].question
    let questType = brief[num].type
    if (questType === 'radio') {
        brief[num].answers.forEach(el => {
            questBox.innerHTML += `<div class="col-12 col-md-6"><label><input type="${questType}" name="q${num}" value="${el.text}">${el.text}</label></div>`
        })
    } else if (questType === 'textarea') {
        questBox.innerHTML += `<div class="col-12"><label><textarea></textarea></div>`
    } else if (questType === 'text') {
        questBox.innerHTML += `<div class="col-12 col-md-6"><label><input type="${questType}" name="q${num}"></label></div>`
    } else {
        questBox.innerHTML += `<p>Такого типа нет</p>`
    }
    console.log(clientAnswers)
}

function prevQuestion(num) {
    const questBox = document.querySelector('.question-box')
    const question = document.querySelector('.question')
    const questNumber = document.querySelector('.iterator')

    if (num === 0) {
        questNumber.innerHTML = ''
    }

    let questTotal

    if (questNumber.querySelector('span')) {
        questTotal = questNumber.querySelector('span').innerHTML
    }

    questNumber.innerHTML = `Вопрос ${num} из <span>${questTotal}</span>`

    questBox.innerHTML = ''
    question.innerHTML = brief[num].question
    let questType = brief[num].type
    if (questType === 'radio') {
        brief[num].answers.forEach(el => {
            let checked
            if (clientAnswers[num].answ === el.text) {
                checked = 'checked'
            }
            questBox.innerHTML += `<div class="col-12 col-md-6"><label><input type="${questType}" name="q${num}" value="${el.text}" ${checked}>${el.text}</label></div>`
        })
    } else if (questType === 'textarea') {
        questBox.innerHTML += `<div class="col-12"><label><textarea></textarea></div>`
    } else if (questType === 'text') {
        questBox.innerHTML += `<div class="col-12 col-md-6"><label><input type="${questType}" name="q${num}"></label></div>`
    } else {
        questBox.innerHTML += `<p>Такого типа нет</p>`
    }

}

function prevAnswer (el, num) {
    let result
    if (el.type === 'radio') {
        clientAnswers.forEach((ans, i) => {
            if (ans.questNum === brief[num].num - 1)  {
                if (el.value === ans.answ) {
                    result = 'checked'
                }
            }
        })
    }
    console.log(el)
    console.log(result)
    return result
}