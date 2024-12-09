// Slider
const sliderElements = (function () {
    const slider = document.getElementById('slider');
    const stage = slider.querySelector('.slider-stage');
    const slides = slider.querySelectorAll('#slides .slide');
    const prev = slider.querySelector('.slider-control.prev');
    const next = slider.querySelector('.slider-control.next');
    const dots = slider.querySelector('#slider-dots');
    return {slides, dots, prev, next};
})();

const slider = {
    currentSlide: 0,
    slides : sliderElements.slides,
    _timer: '', 
    setActiveSlide: function (slideIndex) {
        this.currentSlide = Number(slideIndex);
        for (let i=0; i<this.slides.length; i++){
            if (i === this.currentSlide) {
                this.slides[i].classList.add('active');
            } else {
                this.slides[i].classList.remove('active');
            }
        }
        this.renderDots();
    },
    prev: function () {
        if (this.currentSlide > 0) {
            this.currentSlide--;
        } else {
            this.currentSlide = Number(this.slides.length -1);
        }
        this.setActiveSlide(this.currentSlide);
    },
    next: function () {
        if (this.currentSlide < (this.slides.length-1)) {
            this.currentSlide++;
        } else {
            this.currentSlide = 0;
        }
        this.setActiveSlide(this.currentSlide);
   },
    autoSlide: function (time) {
        clearInterval(this._timer);
        this._timer = setInterval(() => {
            slider.next();
        }, time);
    },
    renderDots: function () {
        sliderElements.dots.innerText = '';
        for (let i =0; i<this.slides.length; i++) {
            const dotBtn = document.createElement('button');
            dotBtn.type = 'button';
            dotBtn.dataset.index = i;
            const dot = document.createElement('i');
            dot.classList.add('fa-solid');
            if (i === this.currentSlide) {
                dot.classList.add('fa-circle-dot');
            } else {
                dot.classList.add('fa-circle');
            }
            dotBtn.appendChild(dot);
            sliderElements.dots.appendChild(dotBtn);
            
        }

    }

}

slider.autoSlide(6000);
slider.renderDots();


const events = (function () {
    // Event listeners for controls
    sliderElements.prev.addEventListener('click', (e) => {
        slider.autoSlide(6000);
        slider.prev();
    });
    sliderElements.next.addEventListener('click', (e) => {
        slider.autoSlide(6000);
        slider.next();
    });
    sliderElements.dots.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        slider.autoSlide(6000);
        slider.setActiveSlide(index);
    })
})();

// Dropdowns
const activateDropdown = (function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((el) => {
        el.addEventListener('click', (e) => {
            el.classList.toggle('active');
        })
    })
})();