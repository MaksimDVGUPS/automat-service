// Слайдер "Типы оборудования"
$('.main-content__slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 860,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }
    ],
});