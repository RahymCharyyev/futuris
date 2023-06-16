$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "#button1",
    nextArrow: "#button2",

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  $("#services__link").click(function () {
    $(".vertical__slider").slick("slickGoTo", 2);
  });
});

$(document).ready(function () {
  $(".project__mobile-slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    prevArrow: "#button3",
    nextArrow: "#button4",
  });
});
