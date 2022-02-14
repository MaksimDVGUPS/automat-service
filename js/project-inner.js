$('.main-content__big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.main-content__small-slider',
    responsive: [
        {
            breakpoint: 640,
            settings: {
                arrows: false,
            }
        }
    ]
});

$('.main-content__small-slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main-content__big-slider',
    dots: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 910,
            settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 640,
            settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 480,
            settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 3,
            }
        }
    ]
});