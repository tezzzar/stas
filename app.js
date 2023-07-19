let tab1 = document.getElementById("nav1");
let tab2 = document.getElementById("nav2");
let tab3 = document.getElementById("nav3");
let tab4 = document.getElementById("nav4");
tab1.addEventListener("click", function () {
  tab1.classList.add("navbar-focus");
  tab2.classList.remove("navbar-focus");
  tab3.classList.remove("navbar-focus");
  tab4.classList.remove("navbar-focus");
});
tab2.addEventListener("click", function () {
  tab1.classList.remove("navbar-focus");
  tab2.classList.add("navbar-focus");
  tab3.classList.remove("navbar-focus");
  tab4.classList.remove("navbar-focus");
});
tab3.addEventListener("click", function () {
  tab1.classList.remove("navbar-focus");
  tab2.classList.remove("navbar-focus");
  tab3.classList.add("navbar-focus");
  tab4.classList.remove("navbar-focus");
});
tab4.addEventListener("click", function () {
  tab1.classList.remove("navbar-focus");
  tab2.classList.remove("navbar-focus");
  tab3.classList.remove("navbar-focus");
  tab4.classList.add("navbar-focus");
});

$(document).ready(function () {
  $(".slider-top").slick({
    adaptiveHeight: true,
    autoplay: false,
    infinite: true,
    arrows: true,
    dots: true,
  });
});

let ukr = document.getElementById("ukr");
let rus = document.getElementById("rus");
ukr.addEventListener("click", function () {
  ukr.classList.add("lang-focus");
  rus.classList.remove("lang-focus");
});
rus.addEventListener("click", function () {
  ukr.classList.remove("lang-focus");
  rus.classList.add("lang-focus");
});

window.addEventListener("scroll", function () {
  var scrollArrow = document.getElementById("scroll-arrow");
  var scrollBlock = document.querySelector(".scroll-block");
  var blockTop = scrollBlock.getBoundingClientRect().top;

  if (blockTop < window.innerHeight && blockTop + scrollBlock.offsetHeight > 0) {
    scrollArrow.classList.add("show");
  } else {
    scrollArrow.classList.remove("show");
  }
});

// window.addEventListener("scroll", function () {
//   var scrollAnime = document.querySelector(".anime");
//   var blockTop = scrollBlock.getBoundingClientRect().top;

//   if (blockTop < window.innerHeight && blockTop + scrollBlock.offsetHeight > 0) {
//     scrollAnime.classList.add("animate__rubberBand");
//   } else {
//     scrollAnime.classList.remove("animate__rubberBand");
//   }
// });

// Отримуємо елемент, який потрібно відстежувати
const element = document.querySelector('.anime');

// Створюємо новий екземпляр Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Коли елемент зʼявляється на екрані (entry.isIntersecting === true), додаємо клас "visible"
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__rubberBand');
    } else {
      entry.target.classList.remove('animate__rubberBand');
    }
  });
});

// Починаємо відстежувати елемент
observer.observe(element);


const movingText = document.querySelector('.moving-text');
function isElementVisible(element) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          resolve(true);
        }
      });
    });

    observer.observe(element);
  });
}

const myElement = document.getElementById('text-moving');

isElementVisible(myElement).then((isVisible) => {
  if (isVisible) {
    movingText.classList.add('show-text');
  }
});
