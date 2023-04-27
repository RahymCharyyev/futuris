$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 4,
    prevArrow: ".project__buttons-prev",
    nextArrow: ".project__buttons-next",
    responsive: [
      {
        breakpoint: 1512,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          slidesToShow: 3,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1,
          adaptiveHeight: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".vertical__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false,
    arrows: false,
    speed: 800,
  });
  $(".custom-dots .dot").on("click", function () {
    var slideIndex = $(this).index();
    $(".vertical__slider").slick("slickGoTo", slideIndex);
  });

  $(".vertical__slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".custom-dots .dot").removeClass("active");
      $(".custom-dots .dot-" + (nextSlide + 1)).addClass("active");
    }
  );

  $(".custom-dots-horizontal .dot").on("click", function () {
    var slideIndex = $(this).index();
    $(".vertical__slider").slick("slickGoTo", slideIndex);
  });

  $(".vertical__slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".custom-dots-horizontal .dot").removeClass("active");
      $(".custom-dots-horizontal .dot-" + (nextSlide + 1)).addClass("active");
    }
  );
});
