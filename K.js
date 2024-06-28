const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');
let index = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

const updateIndicators = () => {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
};

const moveToSlide = (slideIndex) => {
    carousel.style.transform = `translateX(${-100 * slideIndex}%)`;
    index = slideIndex;
    updateIndicators();
};

const moveToNextSlide = () => {
    if (index < totalSlides - 1) {
        moveToSlide(index + 1);
    } else {
        moveToSlide(0);
    }
};

const moveToPrevSlide = () => {
    if (index > 0) {
        moveToSlide(index - 1);
    } else {
        moveToSlide(totalSlides - 1);
    }
};

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        moveToSlide(i);
    });
});

setInterval(moveToNextSlide, 3000);
