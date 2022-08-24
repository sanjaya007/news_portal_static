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

  // mobile nav open
  $(".tab-box").on("click", function () {
    const elId = $(this).attr("data-target");
    $(`#${elId}`).animate({
      right: "0",
      opacity: "1",
    });
  });

  // mobile nav close
  $(".mobile-close-icon").on("click", function () {
    $(".mobile-nav").animate({
      right: "-110%",
      opacity: "0",
    });
  });

  // close when click outside
  $("#bodyContainer").on("click", function (e) {
    const targetEl = e.target;
    const className = $(targetEl).attr("class")?.split(" ")[0];

    if (className !== "tab-box") {
      $(".mobile-nav").animate({
        right: "-110%",
        opacity: "0",
      });
    }
  });

  // mobile link dropdown
  $(".mobile-plus-icon").on("click", function () {
    const thisEl = $(this);
    const iconEl = $(this).children(".fa-solid");
    const dropEl = $(this).parent().parent().children(".mobile-drop-box");

    const elStatus = $(this).attr("data-status");

    if (elStatus === "plus") {
      openDropBox(thisEl, iconEl, dropEl);
    } else {
      closeDropBox(thisEl, iconEl, dropEl);
    }
  });

  function openDropBox(thisEl, iconEl, dropEl) {
    closeAllDropBox();
    $(thisEl).attr("data-status", "minus");
    $(iconEl).attr("class", "fa-solid fa-minus");
    $(dropEl).slideDown();
  }

  function closeDropBox(thisEl, iconEl, dropEl) {
    $(thisEl).attr("data-status", "plus");
    $(iconEl).attr("class", "fa-solid fa-plus");
    $(dropEl).slideUp();
  }

  function closeAllDropBox() {
    $(".mobile-plus-icon").attr("data-status", "plus");
    $(".mobile-plus-icon .fa-solid").attr("class", "fa-solid fa-plus");
    $(".mobile-drop-box").slideUp();
  }
});
