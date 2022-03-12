document.addEventListener('DOMContentLoaded', () => {
    const activeItem = document.querySelector('.navbar .nav-item .active');
    const activeItemWidth = activeItem.clientWidth;
    const navDot = document.querySelector('.navbar-dot')
    const navUl = document.querySelector('.navbar-nav')

    window.addEventListener("load", function () {
        navDot.style.display = 'block'
    })

    navDot.style.left = activeItem.offsetLeft - 4 + (activeItemWidth / 2) + 'px'

    document.querySelectorAll('.navbar .nav-item').forEach(el => {
        el.addEventListener('mouseover' ,function(el){
            let offsetLeft = el.target.offsetLeft - 4,
                elWidth = el.target.clientWidth
            navDot.style.left = offsetLeft + (elWidth / 2) + 'px'
        });
    })
    navUl.addEventListener('mouseleave' ,function(el){
        let scrollLeft = activeItem.offsetLeft - 4;
        navDot.style.left = scrollLeft + (activeItemWidth / 2) + 'px'
    });
})

document.addEventListener('DOMContentLoaded', () => {
    // document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    //     t.style.left = n.clientX + "px",
    //         t.style.top = n.clientY + "px",
    //         e.style.left = n.clientX + "px",
    //         e.style.top = n.clientY + "px",
    //         i.style.left = n.clientX + "px",
    //         i.style.top = n.clientY + "px"
    // });

    let t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (let r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    //Navigation

    function App() {
        let body = undefined;
        let menu = undefined;
        let menuItems = undefined;
        let all = undefined;
        let nav = undefined;
        let modal = undefined;
        let scrollSkills
        const init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            nav = document.querySelector('.navbar-mobile');
            modal = document.querySelectorAll('.modal')[0];
            menuItems = document.querySelectorAll('.nav__list-item');
            all = document.body.children;
            applyListeners();
        };
        const applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                if (body.classList.contains('nav-active')) {
                    for (let i = 0; i < all.length; i++) {
                        if (all[i] !== nav) {
                            if (all[i] !== modal) {
                                toggleClass(all[i], 'blur');
                            }
                        }
                    }
                } else {
                    setTimeout(function (){
                        for (let i = 0; i < all.length; i++) {
                            if (all[i] !== nav) {
                                if (all[i] !== modal) {
                                    toggleClass(all[i], 'blur');
                                }
                            }
                        }
                    }, 500)
                }
                toggleClass(body, 'nav-active');
            });
        };
        const toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };
        init();
    }
    App();
});

$(function(){
    $('.scroll-to__navbar').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#scroll-point__navbar').offset().top }, 1000);
        e.preventDefault();
    });
    $('.scroll-to__call').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#scroll-point__call').offset().top }, 1000);
        e.preventDefault();
    });
    $('.scroll-to__order').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#scroll-point__order').offset().top }, 1000);
        e.preventDefault();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const eyeButton = document.querySelector('.nav__eye')
    const upLine = eyeButton.querySelector('.nav__eye-up__line'),
        circle = eyeButton.querySelector('.nav__eye-circle'),
        plus = eyeButton.querySelector('.nav__eye-plus'),
        downLine = eyeButton.querySelector('.nav__eye-down__line'),
        email = eyeButton.querySelector('.nav__eye-email'),
        phone = eyeButton.querySelector('.nav__eye-phone'),
        map = eyeButton.querySelector('.nav__eye-map'),
        whatsapp = eyeButton.querySelector('.nav__eye-whatsapp'),
        telegram = eyeButton.querySelector('.nav__eye-telegram');

    let clicks = 0;
    eyeButton.addEventListener('click', function () {
        ++clicks
        let start = Date.now();

        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            if (clicks % 2 !== 0) {
                circle.style.transform = 'translateX(-50%) translateY(-50%) rotate(360deg)';
                plus.style.transform = 'translateX(-50%) translateY(-50%) rotate(405deg)';
                downLine.style.transform = 'translateX(-50%) translateY(50%)';
                upLine.style.transform = 'translateX(-50%) translateY(-150%)';
                email.classList.add('nav__eye-email__active');
                phone.classList.add('nav__eye-phone__active');
                map.classList.add('nav__eye-map__active');
                whatsapp.classList.add('nav__eye-whatsapp__active');
                telegram.classList.add('nav__eye-telegram__active');
            } else {
                circle.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg)';
                plus.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg)';
                downLine.style.transform = 'translateX(-50%) translateY(-50%)';
                upLine.style.transform = 'translateX(-50%) translateY(-50%)';
                email.classList.remove('nav__eye-email__active');
                phone.classList.remove('nav__eye-phone__active');
                map.classList.remove('nav__eye-map__active');
                whatsapp.classList.remove('nav__eye-whatsapp__active');
                telegram.classList.remove('nav__eye-telegram__active');
            }
            if (timePassed > 2000) clearInterval(timer);
        }, 20);
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelectorAll('.project-info__button')
    btn.forEach(el => {
        el.addEventListener('click', function (el) {
            el.preventDefault()
            let parentBox = el.target.parentNode.parentNode.parentNode.parentNode.querySelector('.project-description')

            parentBox.classList.toggle("opened");

            if ( parentBox.classList.contains("opened") ) {
                parentBox.style.maxHeight = `1000px`;
            } else {
                parentBox.style.maxHeight = "0px";
            }
        })
    })
})