$(function() {
    // Переключение карты при клике по ссылке
    const tabEls = document.querySelectorAll('.map__tabs-item')

    for(const link of document.querySelectorAll('.main-content__link')) {
        link.addEventListener('click', () => {
            switch (link.getAttribute('data-map')) {
                case 'peterburg':
                    tabEls[0].click()
                    break
                case 'moscow':
                    tabEls[1].click()
                    break
                case 'bryansk':
                    tabEls[2].click()
                    break
                default: break
            }
        })
    }
});
    