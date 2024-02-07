
const ModalCallForm = document.getElementById("call-form")

let elementsArray = document.querySelectorAll('.callBox');
elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        ModalCallForm.classList.add("modal-box__open")
    });
});


// Закрытие модального окна
ModalCallForm.querySelector(".modal-wrapper").addEventListener("click", function (event) {
    event._isClick = true
})
ModalCallForm.addEventListener("click", function (event) {
    if (event._isClick === true) return
    ModalCallForm.classList.remove("modal-box__open")
})
  
// Закрытие при нажатии на Esc
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        ModalCallForm.classList.remove("modal-box__open")
    }
})

// Swiper
const swiper = new Swiper("#gallery", {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,

    navigation: {
      nextEl: "#gallery-right",
      prevEl: "#gallery-left",
    }
});


// Swiper for Device
const swiperDevice = new Swiper("#device-gallery", {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,

    navigation: {
      nextEl: "#gallery-right",
      prevEl: "#gallery-left",
    }
});

// Swiper for Portfolio
const swiperPortfolio = new Swiper("#portfolio-swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: "#gallery-right",
      prevEl: "#gallery-left",
    }
});

// Переключение слайдов при наведении на ссылку
let elementsFolio = document.querySelectorAll('.operation-item a');
elementsFolio.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        swiperPortfolio.slideNext();
    });
});





// IMASK
const element = document.getElementById("input-mask");
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);