$(function () {
  if (!$(".envelope").hasClass("open")) {
    $(".envelope").click(function () {
      $(this).removeClass("new").addClass("open");
    });
  }
});
$("#copyright").css("position", "absolute");
$("#copyright").css("bottom", "10px");
