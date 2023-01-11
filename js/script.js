console.log('Привіт')

// Start Animation
const startAnimation = document.querySelector('.white-black')

// зникає перша анімаця за певний проміжок часу
// startAnimation.addEventListener('click', function () {
//     startAnimation.classList.add('invisible')
// })

// Catalog
const catalog = document.querySelector('#catalog')
const hiddenMenu = document.querySelector('#hiddenMenu')

// Коли нажимаємо на каталог, появляється або закривається скрите меню
catalog.addEventListener('click', function () {
    console.log('Open or close catalog')
    hiddenMenu.classList.toggle('invisible')
})