const handleNavItems = (no) => {
    const elements = document.querySelectorAll('.content');
    for (let i = 0; i < elements.length; i++) {
        if (no === i) {
            elements[i].style.display = 'block'
            backToTop()
        }
        else {
            elements[i].style.display = 'none'
        }
    }
}

const backToTopBtn = document.querySelector('.bi-arrow-up');
const showBactToTopBtn = () => {
    backToTopBtn.style.opacity = 1
    if (window.pageYOffset > 150) {
        backToTopBtn.classList.replace('fade-out', 'fade-in');
    }
    else {
        backToTopBtn.classList.replace('fade-in', 'fade-out')
    }
}

document.body.onscroll = () => showBactToTopBtn()

const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
backToTopBtn.addEventListener('click', backToTop);