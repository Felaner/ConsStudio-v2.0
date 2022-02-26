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

document.addEventListener('DOMContentLoaded', () => {
    let events = ['input', 'focus', 'blur'];
    const callModalButton = document.querySelector('.call-form__show-modal')
    const formModalButton = document.querySelector('.form-order__button')
    let activeModal;
    document.querySelectorAll('input[required]').forEach((el, index) => {
        events.forEach(function(event) {
            el.addEventListener(event, function () {
                validateInputs(el)
            })
        })
    })
    const callModals = [callModalButton, formModalButton]
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
    const callForm = document.querySelector(".call-form"),
        orderForm = document.querySelector(".form-order"),
        forms = [callForm, orderForm];
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
                            console.log('error: ' + err)
                        },
                        beforeSend: function () {
                            console.log('loading')
                        },
                        success: function (result) {
                            console.log(result)
                            grecaptcha.reset(index);
                            activeModal.hide()
                            event.target.reset();
                        }
                    })
                    event.preventDefault();
                    return false;
                } else {
                    console.log('Failed')
                    // fadeAddFailed()
                }
            }
        })
    })
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