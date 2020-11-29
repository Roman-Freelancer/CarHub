function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
$(function () {
  $(".header__list a").on("click", function () {
    $(".header__list a").removeClass("active");
    $(this).addClass("active");
  });
  $("[type = tel]").mask("(999) 999-9999");
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("html").toggleClass("block");
  });
  AOS.init({
    offset: 100,
    once: true,
    duration: 1000
  });
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({
      scrollTop: dn
    }, 1000);
  });
  const offset = 300,
        scrollUp = document.querySelector('.scroll-up'),
        scrollUpSvgPath = document.querySelector('.scroll-up__svg-path'),
        pathLength = scrollUpSvgPath.getTotalLength();
  scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  scrollUpSvgPath.style.transition = `all 20ms`;

  const updateDashOffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashOffset = pathLength - window.pageYOffset * pathLength / height;
    scrollUpSvgPath.style.strokeDashoffset = dashOffset;
  };

  window.addEventListener('scroll', () => {
    updateDashOffset();

    if (window.pageYOffset > offset) {
      scrollUp.classList.add('scroll-up--active');
    } else {
      scrollUp.classList.remove('scroll-up--active');
    }
  });
  scrollUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});