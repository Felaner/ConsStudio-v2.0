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
        const init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            nav = document.querySelector('.navbar-mobile');
            menuItems = document.querySelectorAll('.nav__list-item');
            all = document.body.children;
            applyListeners();
        };
        const applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                if (body.classList.contains('nav-active')) {
                    for (let i = 0; i < all.length; i++) {
                        if (all[i] !== nav) {
                            toggleClass(all[i], 'blur');
                        }
                    }
                } else {
                    setTimeout(function (){
                        for (let i = 0; i < all.length; i++) {
                            if (all[i] !== nav) {
                                toggleClass(all[i], 'blur');
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