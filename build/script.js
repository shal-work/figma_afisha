/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// $.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
// $.prototype.accordion = function(headActive = 'faq-active', textActive = 'faq-text-active' ) {
//     for (let i = 0; i < this.length; i++) {
//         $(this[i]).click(() => {
//             $(this[i]).toggleClass(headActive);
//             $(this[i]).find('.questions__faq-text').toggleClass(textActive);
//         });
//     }
// };

// $('.questions__faq').accordion();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function(headActive = 'faq-active', textActive = 'faq-text-active', titltActive = 'faq-title-active', ) {
    for (let i = 0; i < this.length; i++) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
            // console.log( $(this[i]).find('.questions__faq-text'));
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).find('.questions__faq-text').toggleClass(textActive);
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).find('.questions__faq-title').toggleClass(titltActive);

        });
    }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.questions__faq').accordion();


/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const trigger = this[i].getAttribute('data-toggle-trigger'); //вариант урока
        // const id = this[i].getAttribute('id').replace(/(-?(\D+\.\D+)|(\D+))/, ''); //("drop:26.2_d5").replace выдает 26.2_d5

        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle="${trigger}"]`).fadeToggle(800);
        });
    }
};


/***/ }),

/***/ "./src/js/lib/components/observer.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/observer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const options = {
	rootMargin: '-10px'
};
// Создать наблюдателя
const observer = new IntersectionObserver(entries => {
	// перебор записей
	entries.forEach(entry => {
		// console.log(entry.target.classList);
		let containerInner = entry.target.querySelectorAll('[data-animated]');
		if (entry.isIntersecting ) {
			containerInner.forEach(function(item) {
				// console.log(item);
				let setaDataAimated = item.dataset.animated;
				// console.log(setaDataAimated);
				item.classList.add('animated');
				item.classList.add(setaDataAimated);
			})
			return; // если класс добавлен, продолжать уже не надо
		}
		containerInner.forEach(function(item) {
			let setaDataAimated = item.dataset.animated;
			item.classList.remove('animated');
			item.classList.remove(setaDataAimated);
		});
	});
}, options);

// Сообщить наблюдателю, какие элементы следует отслеживать
try {
	observer.observe(document.querySelector('.container-our-bread-collection'));
	observer.observe(document.querySelector('.container-wholesale__container'));
} catch (error) {}
try {
	observer.observe(document.querySelector('#baking'));
	observer.observe(document.querySelector('#baking-img'));

} catch (error) {}
try {
	observer.observe(document.querySelector('#contact-page'));
} catch (error) {}


// Пример записи:
// в html: 
// <div class="container-wholesale__container" id="craft">
// 		<div class="container-inner" data-animated = "fadeInUp">
//</div>
// в js:
//observer.observe(document.querySelector('.container-wholesale__container'));
// или
//observer.observe(document.getElementById('craft'));
//observer.observe(document.querySelector('#craft'));

/***/ }),

/***/ "./src/js/lib/components/slider-class-afisha-title.js":
/*!************************************************************!*\
  !*** ./src/js/lib/components/slider-class-afisha-title.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderClass1; });


const CLASS_CONTROL_HIDE = 'slider__control_hide';

class SliderClass1 {
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


/***/ }),

/***/ "./src/js/lib/components/slider-class-afisha.js":
/*!******************************************************!*\
  !*** ./src/js/lib/components/slider-class-afisha.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderClass; });


const CLASS_INDICATOR_ACTIVE = 'active';

class SliderClass {
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


/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {}
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

/* harmony default export */ __webpack_exports__["default"] = ($);


/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_hendlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hendlers */ "./src/js/lib/modules/hendlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/observer */ "./src/js/lib/components/observer.js");
/* harmony import */ var _components_observer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_observer__WEBPACK_IMPORTED_MODULE_9__);

 //show, hide, toggle
//addClass, removeClass, toggleClass
// on, off, click
//setAttribute, removeAttribute, toggleAttribute
//html, eq, index, find, siblings
//






/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/*
    $.prototype.html-
    Метод для замены, полученной HTML
    структуры внутри элемента.
    Если контента передан, то заменяем контент,
    если аргументов нет, то получаем контент
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

/*
    $.prototype.eq -
    Получаем объект по номеру,
    т.е. получаем один элемент как самостоятельный объект,
    а не  элемент часть объекта
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

/*
    $.prototype.index-
    Получение номера элемента по порядку среди элементов
    у одного родителя
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    // function findMyIndex (item) {
    //     return item == this[0];
    // };

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

/*
    Найти элементы по селектору внутри уже найденных.
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

// X.losest(Y) возвращает элементы X с ближайшим общим родительским элементом (Y) (или сам элемент)
// console.log($('.some').closest('.findme')); - найти все .some с родителем .findme, если не найдено вернуть сам элемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        let this1 = this[i].closest(selector);
        debugger
        if(!this1) { //мое условие
            // this[i] = 'classNull';
            return this;
        }
        this[i] = this1;
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }
    debugger
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};


/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        
        if (!this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].setAttribute(attributeName, value);
        }
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (attributeName) {
    for (let i = 0; i < this.length; i++) {

        if (this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].removeAttribute(attributeName);
        }
    }
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {

        if (this[i].hasAttribute(attributeName)) {
            this[i].removeAttribute(attributeName);
        } else {
            this[i].setAttribute(attributeName, value);
        }
    }

    return this;
};

//новые 15.10.2025, так как работает выше, после удаления артибута
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleBooleanAttribute = function (attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            if (this[i].getAttribute(attributeName) == 'false') {
                this[i].setAttribute(attributeName, true);
            } else {
                this[i].setAttribute(attributeName, false);
            }          
        }
    }
    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleChangeAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].setAttribute(attributeName, value);        
        }
    }
    return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classNames);
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classNames);
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function(classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(classNames);
    }

    return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = '';
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
};

// toggle style overflow 
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleOverflow = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style.overflow === 'hidden') {
            this[i].style.overflow = '';
        } else {
            this[i].style.overflow = 'hidden';
        }
    }

    return this;
};   

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function(dur, display, fin) { //Д.З.4-8
    
    for (let i = 0; i < this.length; i++) {
        this.fadeInBody(dur, display, fin, i);
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function(dur, fin) { //Д.З.4-8
    
    for (let i = 0; i < this.length; i++) {
        this.fadeOutBody(dur, fin, i);
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function(dur, display, fin) { //Д.З.4-8
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this.fadeInBody(dur, display, fin, i);
        } else {
            this.fadeOutBody(dur, fin, i);
        }
    }
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeInBody = function(dur, display, fin, i) { //Д.З.4-8
    
    this[i].style.display = display || 'block';
    const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
    };
    
    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
    
    return this[i];
}


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOutBody = function(dur, fin, i) { //Д.З.4-8
    
    const _fadeOut = (complection) => {
        this[i].style.opacity = 1 - complection;
        if (complection === 1) {
            this[i].style.display = 'none';
        }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);

    return this[i];
}


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};








/***/ }),

/***/ "./src/js/lib/modules/hendlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/hendlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// Реазизация
// $('.food-2 a').on('click',() => {
//     $('.modal-dialog').fadeIn(180);
// });
// $('button').on('click', function() {
//     $('div').eq(2).toggleClass('active');  
// });

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};






/***/ }),

/***/ "./src/js/lib/site/main.js":
/*!*********************************!*\
  !*** ./src/js/lib/site/main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider_class_afisha_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/slider-class-afisha.js */ "./src/js/lib/components/slider-class-afisha.js");
/* harmony import */ var _components_slider_class_afisha_title_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/slider-class-afisha-title.js */ "./src/js/lib/components/slider-class-afisha-title.js");



let burger = false;
$('.header__burger').on('click', () => {
    toggleBurger()
    burger = true;
});
$('.menu').on('click', () => {
    if (burger)  toggleBurger();
    burger = false;
});
function toggleBurger () {
    $('.header').toggleClass("fadeIn--open");
    $('.page').toggleClass('none-scroll');
    $('body').toggleOverflow();
    
    $('.header__burger').toggleBooleanAttribute('aria-expanded');
    const burger = document.querySelector('.header__burger');
    let expanded = burger.getAttribute('aria-expanded') === 'true';  
    if (Boolean(expanded)) {
        $('.header__burger').toggleChangeAttribute('aria-label', 'Закрыть меню');
    } else {
        $('.header__burger').toggleChangeAttribute('aria-label', 'Открыть меню');
    }
}


$('.picture-logo').on('click', () => {
    $('.content').addClass("active");
    $('.all-event-posters').removeClass("active");
    $('.detail').removeClass("active");
    $('.contacts').removeClass("active");
});
$('[data-poster]').on('click', () => {
    $('.all-event-posters').addClass("active");
    $('.content').removeClass("active");
    $('.detail').removeClass("active");
    $('.contacts').removeClass("active");
});
$('[data-detail]').on('click', () => {
    $('.detail').addClass("active");
    $('.content').removeClass("active");
    $('.all-event-posters').removeClass("active");
    $('.contacts').removeClass("active");
});
$('[data-contacts]').on('click', () => {
    $('.contacts').addClass("active");
    $('.detail').removeClass("active");
    $('.content').removeClass("active");
    $('.all-event-posters').removeClass("active");
});

window.addEventListener('DOMContentLoaded', function(){
    //заполнение кнопок экскурсий
    // let calendarBtn = document.querySelectorAll(".calendar__item");
    const parentElement = document.querySelector('.calendar__inner');  
    for (let index = 0; index < 7; index++) {
        for (let i = 0; i < 5; i++) {
            const button = document.createElement("button");  
            button.innerText = index + 1; 
            button.type = "submit";  
            button.className = "btn btn-calendar calendar__item"; 
            button.className = index % 2 ? "btn btn-calendar calendar__item  btn-calendar_accent" : "btn btn-calendar calendar__item"; 
            // class="calendar__item"
            parentElement.appendChild(button);
        }
    }


    const bthCalendar = document.querySelectorAll('.btn-calendar');  
    bthCalendar.forEach(function(item){

        item.addEventListener('click', function(){
            $('.btn-calendar').removeClass('btn-calendar_active');
            $(event.target).toggleClass('btn-calendar_active');
        });
    });

    document.addEventListener('keydown', event => {
        if (event.key === "Escape") { 
            $('.all-event-posters').toggleClass("active");
            $('.content').toggleClass("active");
        }
    });


});






    const carousel = new _components_slider_class_afisha_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        selector: '.slider',
        inner: '.slider__inner',
        slides: '.slider__wrapper',
        items: '.slider__item',
        indicators: '.slider__previews-wrapper .thumb-slider'
    });

    carousel.render();

    const carouselExcursions = new _components_slider_class_afisha_title_js__WEBPACK_IMPORTED_MODULE_1__["default"] ({
        selector: '.carousel',
        inner: '.carousel__inner',
        slides: '.carousel__slides',
        items: '.carousel__item',
        btnsNext: '[data-slide="next"]',
        btnsPrev: '[data-slide="prev"]',
    });
    carouselExcursions.render();

/***/ }),

/***/ "./src/js/lib/site/map.js":
/*!********************************!*\
  !*** ./src/js/lib/site/map.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.prototype.map = function () {
    function initMap() {
        let myMap = new ymaps.Map("map-nevsky-1", {
            center: [59.936846, 30.312185],
            zoom: 16,
            controls: [],
        }, {
            suppressMapOpenBlock: true
        });


        // let kurasan = new ymaps.Placemark([59.936846, 30.312185], {
        //     iconCaption: 'Невский проспект, 1/4'
        // }, {
        //     preset: 'islands#circleIcon',
        //     preset: 'islands#pinkDotIcon',
        //     iconColor: '#ff0000',
        // });
        // myMap.geoObjects.add(kurasan);

        // let kurasan = new ymaps.Placemark([59.936846, 30.312185], {
        //     iconCaption: 'Невский проспект, 1/4'
        // }, {
        //     preset: 'islands#circleIcon',
        //     preset: 'islands#pinkDotIcon',
        //     iconColor: 'tfransparent',
        // });
        // myMap.geoObjects.add(kurasan);


        let kurasan = new ymaps.Placemark([59.936846, 30.312185], {},{
            iconLayout: 'default#image',
            // iconImageHref: "assets/img/spriteIco.svg#location-y",
            iconImageHref: "assets/img/location_house.svg",
            iconImageSize: [70, 70],
            iconImageOffset: [-30, -50]
        });
        myMap.geoObjects.add(kurasan);
    }
    ymaps.ready(initMap);
};



try {
    $('.map').map();

} catch (error) {}


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
/* harmony import */ var _lib_site_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/site/main.js */ "./src/js/lib/site/main.js");
/* harmony import */ var _lib_site_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/site/map.js */ "./src/js/lib/site/map.js");
/* harmony import */ var _lib_site_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_site_map_js__WEBPACK_IMPORTED_MODULE_2__);





console.log("%c  РОССИЯ  ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map