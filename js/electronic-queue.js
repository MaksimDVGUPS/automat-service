$(function() {
  // Переключение вкладок
  const tabEls = [...document.querySelectorAll('.main-content__tab')]
  const sliderEl = document.querySelector('.slider')
  const calcEl = document.querySelector('.calc')
  const oftenEl = document.querySelector('.often')
  const helperEl = document.querySelector('.helper')

  for (const tabEl of tabEls) {
    tabEl.addEventListener('click', function (e) {
      // Изменение внешнего вида вкладки
      for (const tab of tabEls) {
        tab.classList.remove('active')
      }
      this.classList.add('active')

      // Отображение контента вкладки
      sliderEl.classList.remove('active')
      calcEl.classList.remove('active')
      oftenEl.classList.remove('active')
      helperEl.classList.remove('active')

      switch (tabEls.indexOf(e.target)) {
        case 0:
          sliderEl.classList.add('active')
          calcEl.classList.add('active')
          break
        case 1:
          oftenEl.classList.add('active')
          break
        case 2:
          helperEl.classList.add('active')
          break
      }
    })
  }

  // Слайдер в калькуляторе
  $('.slider__carousel').slick({
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
            breakpoint: 660,
            settings: {
                slidesToShow: 2
            }
        }
    ],
});

  // Ползунок с ценой в фильтре
  $( "#price-slider" ).slider({
    range: true,
    min: 0,
    max: 300000,
    values: [ 90000, 220000 ],
    slide: function( event, ui ) {
      $( "#price-start" ).val(ui.values[0])
      $( "#price-end" ).val(ui.values[1])
    }
  });
  $( "#price-start" ).val($("#price-slider").slider("values", 0))
  $( "#price-end" ).val($("#price-slider").slider("values", 1))

  updateSuffix($('#price-start'))
  updateSuffix($('#price-end'))

  $('#price-start').on('input', function () {
      updateSuffix($('#price-start'))
      $('#price-slider').slider('values', 0, $('#price-start').val())
  })
  $('#price-end').on('input', function () {
      updateSuffix($('#price-end'))
      $('#price-slider').slider('values', 1, $('#price-end').val())
  })

  // Ползунок с диагональю
  $( "#resolution-slider" ).slider({
      range: true,
      min: 17,
      max: 55,
      values: [17, 44],
      slide: function( event, ui ) {
        $( "#resolution-start" ).val(ui.values[0])
        $( "#resolution-end" ).val(ui.values[1])
      }
  });
  $( "#resolution-start" ).val($("#resolution-slider").slider("values", 0))
  $( "#resolution-end" ).val($("#resolution-slider").slider("values", 1))

  updateSuffix($('#resolution-start'))
  updateSuffix($('#resolution-end'))

  $('#resolution-start').on('input', function () {
    updateSuffix($('#resolution-start'))
    $('#resolution-slider').slider('values', 0, $('#resolution-start').val())
  })
  $('#resolution-end').on('input', function () {
    updateSuffix($('#resolution-end'))
    $('#resolution-slider').slider('values', 1, $('#resolution-end').val())
  })

  // Открытие фильтра
  $('.often__open-filter').on('click', function () {
    $('.filter').addClass('active')
  })

  // Закрытие фильтра
  $('.filter__close').on('click', function () {
    $('.filter').removeClass('active')
  })
});

function updateSuffix(el) {
  const width = getTextWidth(el.val(), '16px Noto');
  const suffixEl = el.next('.filter__input-suffix')
  suffixEl.css('left', (width + 7) + 'px');
}

function getTextWidth(text, font) {
  // re-use canvas object for better performance
  var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}