$(window).on("load", function () {
  // Initialize Swiper
  var swiper = new Swiper(".news-swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
    grabCursor: true,

    // if we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // for navigation button
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
