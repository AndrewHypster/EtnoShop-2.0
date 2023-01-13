console.log('Привіт')

// Start Animation
// const startAnimation = document.querySelector('.white-black')

// зникає перша анімаця за певний проміжок часу
// startAnimation.addEventListener('click', function () {
//     startAnimation.classList.add('invisible')
// })

// Catalog
const catalog = document.querySelector('#catalog')
const hiddenMenu = document.querySelector('#hiddenMenu')
const magnetMenu = document.querySelector('#magnetMenu')
const paintingMenu = document.querySelector('#paintingMenu')

// All Magnets
const magnet = document.querySelectorAll('#magnet')
// All Paintings
const painting = document.querySelectorAll('#painting')

// Коли нажимаємо на каталог, появляється або закривається скрите меню
catalog.addEventListener('click', function () {
    console.log('Open or close catalog')
    hiddenMenu.classList.toggle('invisible')
})

// Коли нажимаєм на меню магнітів, всьо пропадає і появляться магнітики
magnetMenu.addEventListener('click', function () {
    console.log('Menu with magnets')
    // зникає непотріб
    for(i=0; i < painting.length; i++) {
        painting[i].classList.add('invisible')
    }
    // появляються магнітики
    for (i=0; i < magnet.length; i++) {
        magnet[i].classList.remove('invisible')
    }
})

// Коли нажимаєм на меню картин, всьо пропадає і появляться картини
paintingMenu.addEventListener('click', function () {
    console.log('Menu with paintings')
    // зникає непотріб
    for(i=0; i < magnet.length; i++) {
        magnet[i].classList.add('invisible')
    }
    // появляються магнітики
    for (i=0; i < painting.length; i++) {
        painting[i].classList.remove('invisible')
    }
})