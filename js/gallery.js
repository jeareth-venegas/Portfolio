for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.currentTarget.getAttribute('src');
        bigImage.src = `${url}`;
        for (let i = 0; i < links.length; i++) {
        links[i].classList.add('img-content-hidden');
        if (links[i].getAttribute('src') === url) {
            links[i].classList.remove('img-content-hidden');
        }
        }
        for (let i = 0; i < bigImage.length; i++) {
        bigImage[i].classList.remove('img-active');
        }
        event.currentTarget.classList.add('img-active');
    });
}
