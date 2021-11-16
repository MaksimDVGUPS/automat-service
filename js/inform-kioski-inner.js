// Карусель с миниатюрами в карточке товара
$('.main-content__big-carousel').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: false,
    asNavFor: '.main-content__thumbs-carousel'
});

$('.main-content__thumbs-carousel').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    asNavFor: '.main-content__big-carousel'
});

$('.main-content__ral-carousel').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    autoplay: false,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3
            }
        }
    ],
});