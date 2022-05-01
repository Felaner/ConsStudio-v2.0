document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.animation-title')) {
        const title = document.querySelector('.animation-title'),
            title1 = document.querySelector('.animation-title1'),
            title2 = document.querySelector('.animation-title2'),
            title3 = document.querySelector('.animation-title3'),
            title4 = document.querySelector('.animation-title4')
        if (window.innerWidth > 992) {
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
                // else {
                //     title1.style.transform = 'translateY(-50%) rotate(0.5turn) scale(0)'
                //     title.style.transform = 'translateY(-50%)'
                //     setTimeout(function () {
                //         title.classList.remove('turn-in')
                //         title.classList.add('turn-out')
                //         title1.classList.remove('turn-out')
                //         title1.classList.add('turn-in')
                //     }, 200)
                // }
            }, 7000)
        }
    }
})