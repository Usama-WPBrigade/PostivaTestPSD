// var swiper = new Swiper(".overlaySlider", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
// });


$(document).ready(function () {
  //Menu on mobile
  $(".burgericon").on('click', function () {
    $("#header_wrapper").slideToggle();
    $("body").toggleClass("overflow")
    $(".burgericon").toggleClass("openmenu")

    // $(".mainHeader_wrapper").toggleClass(".fullWidth_header")
  });

  $(".menu_arrow").on('click', function () {
    $(".mega_menu").slideToggle();
    $(".menu_arrow").toggleClass("rotate")
  });



  /********* banner slider */
  var swiper = new Swiper(".bannerSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

  /************** noticas  Slider */
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // spaceBetween: 14,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  let overlaySlider;

  $(window).on("load resize", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
      // $(".overlay_wrapper").css("background-color", "gray");
      if (overlaySlider?.destroyed === true || !overlaySlider) {
        overlaySlider = new Swiper(".overlay_wrapper .overlay", {
          slidesPerView: 1,
          loop: true,
          
          pagination: {
            el: ".overlay_wrapper .swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".overlay_wrapper .swiper-button-next",
            prevEl: ".overlay_wrapper .swiper-button-prev",
          },
          breakpoints: {
            767: {
              slidesPerView: 2,
            },
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
            },
          }
        });
      }
    }
    else {
      if (overlaySlider !== undefined) overlaySlider.destroy(true, true);
    }
  });







  let roundSlider;
  $(window).on("load resize", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
      // $(".Rcard_wrapper").css("background-color", "gray");
      if (roundSlider?.destroyed === true || !roundSlider) {
        roundSlider = new Swiper(".Rcard_wrapper .Rcard", {
          slidesPerView: 1,
          loop: true,
          pagination: {
            el: ".Rcard_wrapper .swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".Rcard_wrapper .swiper-button-next",
            prevEl: ".Rcard_wrapper .swiper-button-prev",
          },
          breakpoints: {
            767: {
              slidesPerView: 1,
            },
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
            },
          }
        });
      }
    }
    else {
      if (roundSlider !== undefined) roundSlider.destroy(true, true);
    }
  });


  /* Footer Slider*/
  let footerSlider;
  $(window).on("load resize", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
      // $(".Rcard_wrapper").css("background-color", "gray");
      if (footerSlider?.destroyed === true || !footerSlider) {
        footerSlider = new Swiper(".footerSlider_section .myFooterSlider", {
          slidesPerView: 3,
          loop: true,
          pagination: {
            el: ".footerSlider_section .swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".footerSlider_section .swiper-button-next",
            prevEl: ".footerSlider_section .swiper-button-prev",
          },
          breakpoints: {
            767: {
              slidesPerView: 3,
            },
          },
          breakpoints: {
            480: {
              slidesPerView: 3,
            },
          }
        });
      }
    }
    else {
      if (footerSlider !== undefined) footerSlider.destroy(true, true);
    }
  });


  var imgs = 0;
  $("#toggle_nav").click(function () {
    if (imgs == 0) {
      $(".image").attr("src", "assets/img/burger_menuClosed.svg");
      imgs = 1;
    } else if (imgs == 1) {
      $(".image").attr("src", "assets/img/burgerMenuIcon.svg");
      imgs = 0;
    }
  });

  

});



// // window resize and load function
// $(document).ready(function () {

// })






// /* Menu open On mobile */
// $(document).ready(function () {
// });

// $(document).ready(function () {
// });








// Round Section Tabs
document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tabactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tabactive";
}

//Calender Form Section
document.getElementById("calenderdefaultOpen").click();
function openCalender(evt, calenderName) {
  var i, calendertabcontent, calendertablinks;
  calendertabcontent = document.getElementsByClassName("calendertabcontent");
  for (i = 0; i < calendertabcontent.length; i++) {
    calendertabcontent[i].style.display = "none";
  }
  calendertablinks = document.getElementsByClassName("calendertablinks");
  for (i = 0; i < calendertablinks.length; i++) {
    calendertablinks[i].className = calendertablinks[i].className.replace(" calenderactive", "");
  }
  document.getElementById(calenderName).style.display = "block";
  evt.currentTarget.className += " calenderactive";
}