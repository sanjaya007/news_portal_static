$(window).on("load", function () {
  $(".tab-link").on("click", function () {
    const tabId = $(this).attr("data-tab");
    $(".tab-text.tab-link").removeClass("active");
    $(`#${tabId}`).addClass("active");

    const formId = $(this).attr("data-target");
    $(".form-box").hide();
    $(`#${formId}`).fadeIn();
  });
});
