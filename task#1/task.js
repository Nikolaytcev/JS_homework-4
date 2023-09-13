const reveal = document.querySelectorAll('.reveal');

document.onscroll = () => {
    reveal.forEach((e) => {
        const {top, bottom} = e.getBoundingClientRect();
        if (bottom < window.innerHeight && top > 0) {
            e.classList.add('reveal_active')
        }
        else {
            e.classList = 'reveal';
        }
        })
};
