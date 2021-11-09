window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.footer__arrow-up')
            .classList.add('show');
    } else {
        document.querySelector('.footer__arrow-up')
            .classList.remove('show');
    }
}

document.querySelector('.footer__arrow-up')
    .addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })