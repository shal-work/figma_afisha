$('.header__burger').on('click', () => {toggleBurger()});
$('.menu').on('click', () => {toggleBurger()});
function toggleBurger () {
    $('.header').toggleClass("fadeIn--open");
    $('.page').toggleClass('none-scroll');
}

$.prototype.activeItem = function(dot) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(dot).removeClass("active");
            $(this[i]).addClass("active");
        });
    }
}
$('.design .carousel__item').activeItem('.design .carousel__item');
$('.side .carousel__item').activeItem('.side .carousel__item'); 
$('.drinking .carousel__item').activeItem('.drinking .carousel__item'); 
$('.main .carousel__item').activeItem('.main .carousel__item'); 
$('.always .carousel__item').activeItem('.always .carousel__item'); 
