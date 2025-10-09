'use strict'

const CLASS_INDICATOR_ACTIVE = 'active';

export default class SliderClass {
	constructor({ selector = '', inner = '', slides = '', items = '', indicators = '' } = {}) {

		this.carousel = document.querySelector(selector);
		this.inner = this.carousel.querySelector(inner); //experience__content
		this.slides = this.carousel.querySelector(slides); //experience__content
		if (items !== '') this.items = this.carousel.querySelectorAll(items);//experience__item
		if (indicators !== '') this.indicators = this.carousel.querySelectorAll(indicators); //dot и .carousel__indicators li`


		this.offset = 0;
		this.slideIndex = 0;
		this.quantityInWindow = 0;
		this.widthWindow = 0;
		this.width = 0;
		this.endIndex = 0;
		this.direction = 'next';
	}

	reset() {
		this.offset = 0;
		this.slideIndex = 0;
		this.direction = 'next';
		this.quantityInWindow = Math.round(this.inner.offsetWidth / this.items[0].offsetWidth);

		this.widthWindow = window.getComputedStyle(this.inner).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
		this.width = this.widthWindow / this.quantityInWindow;

		this.slides.style.transform = '';
		
		try {
			this.indicators.forEach(dot => dot.classList.remove(CLASS_INDICATOR_ACTIVE));
			this.indicators[0].classList.add(CLASS_INDICATOR_ACTIVE);
		} catch (error) {}

		this.endIndex = this.items.length - this.quantityInWindow;
		// сделаем невидимой левую кнопку
	}
	swipe() {
		let shiftX = 0;

		this.inner.addEventListener('mousedown', (event) => {
			shiftX = event.clientX;
		});
		this.inner.addEventListener('mouseup', (event) => {
			this.direction = (event.clientX >= shiftX) ? 'prev' : 'next';
			let diffPos = Math.abs(shiftX - event.clientX);
			if (diffPos > this.width/3) {
				this.move();
			}
		});
		this.inner.addEventListener('touchstart', (event) => {
			shiftX = event.touches[0].clientX;
        }, {
            passive: true
        });

		this.inner.addEventListener('touchmove', (event) => {
			this.slides.style.transform = `translateX(${event.touches[0].clientX - shiftX + this.offset}px)`;
		}, {
			passive: true
		});

		this.inner.addEventListener('touchend', (event) => {
			this.direction = (event.changedTouches[0].clientX >= shiftX) ? 'prev' : 'next';
			let diffPos = Math.abs(event.changedTouches[0].clientX - shiftX);
			this.slides.style.transform =  `translateX(${this.offset}px)`;
			if (diffPos > this.width/3) {
				this.move();
			}
		}, {
			passive: true
		});

	}
	moveTo(index) {
		this.slideIndex = index;
		this.offset = -(+this.width) * index;
		this.slides.style.transform = `translateX(${this.offset}px)`;
		this.indicators.forEach(dot => dot.classList.remove(CLASS_INDICATOR_ACTIVE));
		// debugger
		this.indicators[this.slideIndex].classList.add(CLASS_INDICATOR_ACTIVE);
		this.updateIndicators();
	}
	move() {
		// debugger
		if (this.direction === 'next') {
			this.slideIndex++;
		} else {
			this.slideIndex--;
		}
		if (this.slideIndex > this.endIndex) {
			// debugger
			this.slideIndex = this.endIndex;
			return
		} if (this.slideIndex < 0) {
			// debugger
			this.slideIndex = 0;
			return
		}

		let step = this.direction === 'next' ? -(+this.width) : (+this.width);
		this.offset += step;

		// debugger
		this.slides.style.transform = `translateX(${this.offset}px)`;
	    this.updateIndicators();
	}
	clickIndicators() {
		for (let i = 0; i < this.indicators.length; i++) {
			this.indicators[i].addEventListener('click', (e) => {
				const slideTo = e.currentTarget.getAttribute('data-slide-to');
				this.moveTo(slideTo);
			});
		}
	}
	updateIndicators() {
		if (!this.indicators.length) {
			return;
		}
		this.indicators.forEach(dot => dot.classList.remove(CLASS_INDICATOR_ACTIVE));
		this.indicators[this.slideIndex].classList.add(CLASS_INDICATOR_ACTIVE);
	}
	render() {
		this.reset();
		this.clickIndicators();
		this.swipe();
	}
}
