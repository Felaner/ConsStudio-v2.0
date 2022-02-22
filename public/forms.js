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
    const modal = new bootstrap.Modal(document.querySelector('#callModal'))
    document.querySelectorAll('input[required]').forEach((el, index) => {
        events.forEach(function(event) {
            el.addEventListener(event, function () {
                validateInputs(el)
            })
        })
    })
    callModalButton.addEventListener('click', function (el) {
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
            modal.show()
        }
    })
    document.querySelector(".call-form").addEventListener('submit', function (el) {
        event.preventDefault();
        let result = true
        document.querySelectorAll("input[required]").forEach(function (el, index) {
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
            if (checkCaptch && grecaptcha.getResponse(0) !== "") {
                checkCaptch = false;
                let $form = $(this)
                $.ajax({
                    type: $form.attr('method'),
                    url: $form.attr('action'),
                    data: $form.serialize(),
                    error: function (jqXHR, textStatus, err) {
                        grecaptcha.reset(0);
                        console.log('error: ' + err)
                    },
                    beforeSend: function () {
                        console.log('loading')
                    },
                    success: function (result) {
                        console.log(result)
                        grecaptcha.reset(0);
                        $('.home-form')[0].reset();
                        fadeAddSuccess()
                    }
                })
                e.preventDefault();
                return false;
            } else {
                fadeAddFailed()
            }
        }
    })
})

function validateInputs(el) {
    let elValue = el.value
    let elName = el.getAttribute('name')
    let elType = el.getAttribute('type')
    if (el.getAttribute('type') === 'email') {
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