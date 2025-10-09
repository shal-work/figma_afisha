import CarouselTouch from '../components/slider-class-afisha.js';
import CarouselTitle from '../components/slider-class-afisha-title.js';

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






    const carousel = new CarouselTouch({
        selector: '.slider',
        inner: '.slider__inner',
        slides: '.slider__wrapper',
        items: '.slider__item',
        indicators: '.slider__previews-wrapper .thumb-slider'
    });

    carousel.render();

    const carouselExcursions = new CarouselTitle ({
        selector: '.carousel',
        inner: '.carousel__inner',
        slides: '.carousel__slides',
        items: '.carousel__item',
        btnsNext: '[data-slide="next"]',
        btnsPrev: '[data-slide="prev"]',
    });
    carouselExcursions.render();