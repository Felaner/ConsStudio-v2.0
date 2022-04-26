document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.animation-title')) {
        const title = document.querySelector('.animation-title'),
            title1 = document.querySelector('.animation-title1')
        // setInterval(function () {
        //     if (title.classList.contains('turn-out')) {
        //         title.style.transform = 'translateY(-50%) rotate(0.5turn) scale(0)'
        //         title1.style.transform = 'translateY(-50%)'
        //         setTimeout(function () {
        //             title.classList.remove('turn-out')
        //             title.classList.add('turn-in')
        //             title1.classList.remove('turn-in')
        //             title1.classList.add('turn-out')
        //         }, 200)
        //     } else {
        //         title1.style.transform = 'translateY(-50%) rotate(0.5turn) scale(0)'
        //         title.style.transform = 'translateY(-50%)'
        //         setTimeout(function () {
        //             title.classList.remove('turn-in')
        //             title.classList.add('turn-out')
        //             title1.classList.remove('turn-out')
        //             title1.classList.add('turn-in')
        //         }, 200)
        //     }
        // }, 5000)
    }
})