'use strict'

const CLASS_CONTROL_HIDE = 'slider__control_hide';

export default class SliderClass1 {
	constructor({ selector = '', inner = '', slides = '', items = '', btnsNext = '', btnsPrev = ''} = {}) {

		this.carousel = document.querySelector(selector);
		this.inner = this.carousel.querySelector(inner); //experience__content
		this.slides = this.carousel.querySelector(slides); //experience__content
		if (items !== '') this.items = this.carousel.querySelectorAll(items);//experience__item

		if (btnsNext !== '') this.btnsNext = this.carousel.querySelector(btnsNext);
		if (btnsPrev !== '') this.btnsPrev = this.carousel.querySelector(btnsPrev);


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
		// debugger
		this.endIndex = this.items.length - this.quantityInWindow;
		// сделаем невидимой левую кнопку
		if (this.btnsPrev) {
			// this.btnsPrev.classList.add(CLASS_CONTROL_HIDE);
			this.btnsPrev.disabled = true;
		}
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
		this.updateControl();

	}
	move() {
		if (this.direction === 'next') {
			this.slideIndex++;
		} else {
			this.slideIndex--;
		}
		if (this.slideIndex > this.endIndex) {
			this.slideIndex = this.endIndex;
			return
		} if (this.slideIndex < 0) {
			this.slideIndex = 0;
			return
		}
		if(this.btnsPrev) {
			this.btnsPrev.classList.remove(CLASS_CONTROL_HIDE);
			this.btnsPrev.disabled = false;
		}
		if(this.btnsNext) {
			this.btnsNext.classList.remove(CLASS_CONTROL_HIDE);
			this.btnsNext.disabled = false;
		}

		let step = this.direction === 'next' ? -(+this.width) : (+this.width);
		this.offset += step;

		// debugger
		this.slides.style.transform = `translateX(${this.offset}px)`;
		this.updateControl();
	}
	updateControl() {
		if(this.btnsPrev) {
			this.btnsPrev.classList.remove(CLASS_CONTROL_HIDE);
			this.btnsPrev.disabled = false;
		}
		if(this.btnsNext) {
			this.btnsNext.classList.remove(CLASS_CONTROL_HIDE);
			this.btnsNext.disabled = false;
		}
		if (this.slideIndex >= this.endIndex) {
			if(this.btnsNext) {
				this.btnsNext.classList.add(CLASS_CONTROL_HIDE);
				this.btnsNext.disabled = true;
			}
		}
		if (this.slideIndex <= 0) {
			if(this.btnsPrev) {
				this.btnsPrev.classList.add(CLASS_CONTROL_HIDE);
				this.btnsPrev.disabled = true;
			}
		}
	}
	clickNext() {
		
		if(this.btnsNext) {
			this.btnsNext.addEventListener('click', (e) => {
				e.preventDefault();
				// this.direction = e.target.dataset.slide; //если data-slide
				this.direction = e.currentTarget.dataset.slide; //если data-slide
				this.move();
			})
		}

	}
	clickPrev() {
		if(this.btnsPrev){
			this.btnsPrev.addEventListener('click', (e) => {
				e.preventDefault();
				// this.direction = e.target.dataset.slide; //если data-slide
				this.direction = e.currentTarget.dataset.slide; //если data-slide
				this.move();
			});
		}
	}
	render() {
		this.reset();
		this.clickNext();
		this.clickPrev();
		this.swipe();
	}
}
