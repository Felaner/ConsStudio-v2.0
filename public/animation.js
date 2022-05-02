document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.animation-title')) {
        const title = document.querySelector('.animation-title'),
            title1 = document.querySelector('.animation-title1'),
            title2 = document.querySelector('.animation-title2'),
            title3 = document.querySelector('.animation-title3'),
            title4 = document.querySelector('.animation-title4')
        if (window.innerWidth > 991) {
            setInterval(function () {
                if (title.classList.contains('title-show')) {
                    title.classList.remove('title-show')
                    title1.classList.add('title-show')
                    title1.style.transform = 'translateY(-50%) rotate(0.5turn) scale(0)'
                    title.style.transform = 'translateY(-50%)'
                    setTimeout(function () {
                        title1.classList.remove('turn-out')
                        title1.classList.add('turn-in')
                        title.classList.remove('turn-in')
                        title.classList.add('turn-out')
                    }, 200)
                } else if (title1.classList.contains('title-show')) {
                    title1.classList.remove('title-show')
                    title2.classList.add('title-show')
                    title2.style.transform = 'translateY(-50%) rotate(0.5turn) scale(0)'
                    title1.style.transform = 'translateY(-50%)'
                    setTimeout(function () {
                        title2.classList.remove('turn-out')
                        title2.classList.add('turn-in')
                        title1.classList.remove('turn-in')
                        title1.classList.add('turn-out')
                    }, 200)
                } else if (title2.classList.contains('title-show')) {
                    title2.classList.remove('title-show')
                    title3.classList.add('title-show')
                    title3.style.transform = 'translateY(-50%) rotate(0.5turn) scale(0)'
                    title2.style.transform = 'translateY(-50%)'
                    setTimeout(function () {
                        title3.classList.remove('turn-out')
                        title3.classList.add('turn-in')
                        title2.classList.remove('turn-in')
                        title2.classList.add('turn-out')
                    }, 200)
                } else if (title3.classList.contains('title-show')) {
                    title3.classList.remove('title-show')
                    title4.classList.add('title-show')
                    title4.style.transform = 'translateY(-50%) rotate(0.5turn) scale(0)'
                    title3.style.transform = 'translateY(-50%)'
                    setTimeout(function () {
                        title4.classList.remove('turn-out')
                        title4.classList.add('turn-in')
                        title3.classList.remove('turn-in')
                        title3.classList.add('turn-out')
                    }, 200)
                } else if (title4.classList.contains('title-show')) {
                    title4.classList.remove('turn-out')
                    title.classList.add('title-show')
                    title.style.transform = 'translateY(-50%) rotate(0.5turn) scale(0)'
                    title4.style.transform = 'translateY(-50%)'
                    setTimeout(function () {
                        title.classList.remove('turn-out')
                        title.classList.add('turn-in')
                        title4.classList.remove('turn-in')
                        title4.classList.add('turn-out')
                    }, 200)
                }
            }, 9000)
        }
    }
    if (document.querySelector('.animated-text1')) {
        const text1 = document.querySelector('.animated-text1'),
            text2 = document.querySelector('.animated-text2'),
            text3 = document.querySelector('.animated-text3'),
            text4 = document.querySelector('.animated-text4'),
            text5 = document.querySelector('.animated-text5')
        let title1 = text1.querySelector('.service-title'),
            back1 = text1.querySelector('.service-title__background'),
            subtitle1 = text1.querySelector('.main-subtitle'),
            texts1 = [title1, back1, subtitle1]

        let title2 = text2.querySelector('.service-title'),
            back2 = text2.querySelector('.service-title__background'),
            subtitle2 = text2.querySelector('.main-subtitle'),
            texts2 = [title2, back2, subtitle2]

        let title3 = text3.querySelector('.service-title'),
            back3 = text3.querySelector('.service-title__background'),
            subtitle3 = text3.querySelector('.main-subtitle'),
            texts3 = [title3, back3, subtitle3]

        let title4 = text4.querySelector('.service-title'),
            back4 = text4.querySelector('.service-title__background'),
            subtitle4 = text4.querySelector('.main-subtitle'),
            texts4 = [title4, back4, subtitle4]

        let title5 = text5.querySelector('.service-title'),
            back5 = text5.querySelector('.service-title__background'),
            subtitle5 = text5.querySelector('.main-subtitle'),
            texts5 = [title5, back5, subtitle5]


        if (window.innerWidth < 992) {
            setInterval(function () {
                if (text1.classList.contains('text-show')) {
                    text1.classList.remove('text-show')
                    text2.classList.add('text-show')
                    texts1.forEach(el => {
                        el.classList.remove('animated-text__in')
                        el.classList.add('animated-text__out')
                    })
                    setTimeout(function () {
                        texts2.forEach(el => {
                            el.classList.remove('animated-text__out')
                            el.classList.add('animated-text__in')
                        })
                    }, 2000)
                } else if (text2.classList.contains('text-show')) {
                    text2.classList.remove('text-show')
                    text3.classList.add('text-show')
                    texts2.forEach(el => {
                        el.classList.remove('animated-text__in')
                        el.classList.add('animated-text__out')
                    })
                    setTimeout(function () {
                        text3.classList.remove('d-none')
                        text3.classList.add('d-block')
                        texts3.forEach(el => {
                            el.classList.remove('animated-text__out')
                            el.classList.add('animated-text__in')
                        })
                    }, 2000)
                } else if (text3.classList.contains('text-show')) {
                    text3.classList.remove('text-show')
                    text4.classList.add('text-show')
                    texts3.forEach(el => {
                        el.classList.remove('animated-text__in')
                        el.classList.add('animated-text__out')
                    })
                    setTimeout(function () {
                        text4.classList.remove('d-none')
                        text4.classList.add('d-block')
                        texts4.forEach(el => {
                            el.classList.remove('animated-text__out')
                            el.classList.add('animated-text__in')
                        })
                    }, 2000)
                } else if (text4.classList.contains('text-show')) {
                    text4.classList.remove('text-show')
                    text5.classList.add('text-show')
                    texts4.forEach(el => {
                        el.classList.remove('animated-text__in')
                        el.classList.add('animated-text__out')
                    })
                    setTimeout(function () {
                        text5.classList.remove('d-none')
                        text5.classList.add('d-block')
                        texts5.forEach(el => {
                            el.classList.remove('animated-text__out')
                            el.classList.add('animated-text__in')
                        })
                    }, 2000)
                } else if (text5.classList.contains('text-show')) {
                    text5.classList.remove('text-show')
                    text1.classList.add('text-show')
                    texts5.forEach(el => {
                        el.classList.remove('animated-text__in')
                        el.classList.add('animated-text__out')
                    })
                    setTimeout(function () {
                        texts1.forEach(el => {
                            el.classList.remove('animated-text__out')
                            el.classList.add('animated-text__in')
                        })
                    }, 2000)
                } else {
                    setTimeout(function () {
                        text2.classList.add('text-show')
                        texts1.forEach(el => {
                            el.classList.add('animated-text__out')
                        })
                        setTimeout(function () {
                            text2.classList.remove('d-none')
                            text2.classList.add('d-block')
                            texts2.forEach((el, index, array) => {
                                el.classList.add('animated-text__in')
                            })
                        }, 2000)
                    }, 1000)
                }

            }, 7000)
        }
    }
})