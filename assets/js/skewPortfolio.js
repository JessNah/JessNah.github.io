$(document).ready(function() {


      console.log(window.screen.availHeight + " x " + window.screen.availWidth);



  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  $('#skwObject').on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) {e.preventDefault();return; }
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
      e.preventDefault();
    } else {
      navigateDown();
      e.preventDefault();
    }
  });

  $('#skwObject').on("keydown", function(e) {
    if (scrolling) {e.preventDefault();return; }
    if (e.which === 38) {
      navigateUp();
      e.preventDefault();
    } else if (e.which === 40) {
      navigateDown();
      e.preventDefault();
    }
  });

});
