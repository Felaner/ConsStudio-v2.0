let checkCaptch = false

function onloadCallback() {
    document.querySelectorAll('.g-recaptcha').forEach(function(el, index) {
        const widgetId = grecaptcha.render(el, {'sitekey' : '6LdgQJQeAAAAAIh8Sa2hYKKfSiQmCO5hlVbm_cUw', 'callback': verifyCallback});
        el.setAttribute('data-widget-id', widgetId);
    });
}

function verifyCallback(response) {
    if (response === "") {
        checkCaptch = false;
    }
    else {
        checkCaptch = true;
    }
}

function fadeFlash(text, type) {
    const box = document.querySelector('.flash');
    box.innerHTML = `<p>${text}</p>`
    if (type === 'success') {
        box.style.border = '2px solid #14FFEC'
    } else if (type === 'error') {
        box.style.border = '2px solid red'
    }
    box.classList.remove('animate__slideOutUp')
    box.style.display = 'block'
    box.classList.add('animate__slideInDown');
    setTimeout(function () {
        box.classList.remove('animate__slideInDown')
        box.classList.add('animate__slideOutUp')
        setTimeout(function () {
            box.style.display = 'none'
        }, 1200)
    }, 5000)
}

document.addEventListener('DOMContentLoaded', () => {
    let events = ['input', 'focus', 'blur'],
        callFormModalButtons,
        callModals = [],
        callModalButton,
        formModalButton,
        activeModal;
    if (document.querySelectorAll('.call-form-modal__button').length) {
        callFormModalButtons = document.querySelectorAll('.call-form-modal__button')
        callFormModalButtons.forEach(function (el, index) {
            el.addEventListener('click', function (el) {
                activeModal = new bootstrap.Modal(document.querySelector('#callModalForm'))
                activeModal.show()
            })
        })
    }
    if (document.querySelector('.call-form__show-modal')) {
        callModalButton = document.querySelector('.call-form__show-modal')
        callModals.push(callModalButton)
    }
    if (document.querySelector('.form-order__button')) {
        formModalButton = document.querySelector('.form-order__button')
        callModals.push(formModalButton)
    }
    document.querySelectorAll('input[required]').forEach((el, index) => {
        events.forEach(function(event) {
            el.addEventListener(event, function () {
                validateInputs(el)
            })
        })
    })
    callModals.forEach(function (el, index) {
        el.addEventListener('click', function (el) {
            let errors = false
            const inputs = el.target.parentNode.parentNode.parentNode.querySelectorAll('input[required]')
            for(let i = 0; i < inputs.length; i++) {
                let el = inputs[i]
                if (el.value === '' || el.classList.contains('error-input')) {
                    el.focus()
                    errors = true
                    return false
                }
            }
            if (errors === false) {
                activeModal = new bootstrap.Modal(el.target.parentNode.parentNode.parentNode.querySelector('.modal'))
                activeModal.show()
            }
        })
    })
    let callForm,
        orderForm,
        callModalForm,
        forms = [];
    if (document.querySelector(".call-form__modal")) {
        callModalForm = document.querySelector(".call-form__modal")
        forms.push(callModalForm)
    }
    if (document.querySelector(".call-form")) {
        callForm = document.querySelector(".call-form")
        forms.push(callForm)
    }
    if (document.querySelector(".form-order")) {
        orderForm = document.querySelector(".form-order")
        forms.push(orderForm)
    }
    forms.forEach(function (el, index) {
        el.addEventListener('submit', function (event) {
            event.preventDefault();
            let result = true
            event.target.querySelectorAll("input[required]").forEach(function (el, index) {
                if (el.value === '') {
                    el.focus().classList.add('error-input');
                    return result = false;
                } else {
                    el.classList.remove('error-input');
                }
            });
            if (result === false) {
                return false
            } else {
                if (checkCaptch && grecaptcha.getResponse(index) !== "") {
                    checkCaptch = false;
                    let $form = $(this)
                    $.ajax({
                        type: $form.attr('method'),
                        url: $form.attr('action'),
                        data: $form.serialize(),
                        error: function (jqXHR, textStatus, err) {
                            grecaptcha.reset(index);
                            fadeFlash('Ошибка', 'error')
                        },
                        beforeSend: function () {
                            console.log('loading')
                        },
                        success: function (result) {
                            fadeFlash('Успешно отправлено', 'success')
                            grecaptcha.reset(index);
                            activeModal.hide()
                            event.target.reset();
                        }
                    })
                    event.preventDefault();
                    return false;
                } else {
                    fadeFlash('Ошибка. Капча не пройдена', 'error')
                }
            }
        })
    })
})

document.addEventListener('DOMContentLoaded', () => {
    let briefForm
    let briefSubmit
    if (document.querySelector(".brief-page__form-contacts")) {
        briefForm = document.querySelector(".brief-page__form-contacts")
    }
    if (document.querySelector(".submit-box button")) {
        briefSubmit = document.querySelector(".submit-box button")
        briefSubmit.addEventListener('click', function () {
            let result = true
            briefForm.querySelectorAll("input[required]").forEach(function (el) {
                if (el.value === '') {
                    el.focus().classList.add('error-input');
                    return result = false;
                } else {
                    el.classList.remove('error-input');
                }
            });
            if (result === false) {
                return false
            } else {
                if (checkCaptch && grecaptcha.getResponse(1) !== "") {
                    checkCaptch = false;
                    let formData = {}
                    briefForm.querySelectorAll('input, textarea').forEach(el => {
                        let name = el.getAttribute('name')
                        if (el.value !== '') {
                            formData[name] = el.value
                        }
                    })
                    let data = {contacts: formData, answers: answers, 'g-recaptcha-response': grecaptcha.getResponse(1)}
                    $.ajax({
                        type: briefForm.getAttribute('method'),
                        url: briefForm.getAttribute('action'),
                        data: data,
                        error: function (jqXHR, textStatus, err) {
                            grecaptcha.reset(1);
                            fadeFlash('Ошибка', 'error')
                        },
                        beforeSend: function () {
                            console.log('loading')
                        },
                        success: function (result) {
                            fadeFlash('Успешно отправлено', 'success')
                            grecaptcha.reset(1);
                            briefForm.reset();
                            answers.length = 0
                            setTimeout(function () {
                                location.reload()
                            }, 3000)
                        }
                    })
                    return false;
                } else {
                    fadeFlash('Ошибка. Капча не пройдена', 'error')
                }
            }
        })
    }
})

function validateInputs(el) {
    let elValue = el.value
    let elName = el.getAttribute('name')
    let elType = el.getAttribute('type')
    if (elType === 'email') {
        let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (elValue === '' || regEmail.test(elValue) === false) {
            el.classList.add('error-input');
        } else {
            el.classList.remove('error-input');
        }
    } else if (elType === 'tel') {
        let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if (elValue === '') {
            el.classList.remove('error-input');
        } else if (regPhone.test(elValue) === false) {
            el.classList.add('error-input');
        } else {
            el.classList.remove('error-input');
        }
    }
}

