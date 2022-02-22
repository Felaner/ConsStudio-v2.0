let checkCaptch = false

function onloadCallback() {
    document.querySelectorAll('.g-recaptcha').forEach(function(el, index) {
        const widgetId = grecaptcha.render(el, {'sitekey' : '6Le1XSkeAAAAALSe-93I7BO9V35wtopU_a5cWuad', 'callback': verifyCallback});
        document.querySelector(el).setAttribute('data-widget-id', widgetId);
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