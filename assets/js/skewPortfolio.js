$(document).ready(function() {


  // var curpage = 1;
  // var sliding = false;
  // var click = true;

  // var pagePrefix = "slide";
  // var pageShift = 500;
  // var transitionPrefix = "circle";
  // var svg = true;
  //
  // function leftSlide() {
  // 	if (click) {
  // 		if (curpage == 1) curpage = 5;
  // 		console.log("woek");
  // 		sliding = true;
  // 		curpage--;
  // 		svg = true;
  // 		click = false;
  // 		for (k = 1; k <= 4; k++) {
  // 			var a1 = document.getElementById(pagePrefix + k);
  // 			a1.className += " tran";
  // 		}
  // 		setTimeout(() => {
  // 			move();
  // 		}, 200);
  // 		setTimeout(() => {
  // 			for (k = 1; k <= 4; k++) {
  // 				var a1 = document.getElementById(pagePrefix + k);
  // 				a1.classList.remove("tran");
  // 			}
  // 		}, 1400);
  // 	}
  // }
  //
  // function rightSlide() {
  // 	if (click) {
  // 		if (curpage == 4) curpage = 0;
  // 		console.log("woek");
  // 		sliding = true;
  // 		curpage++;
  // 		svg = false;
  // 		click = false;
  // 		for (k = 1; k <= 4; k++) {
  // 			var a1 = document.getElementById(pagePrefix + k);
  // 			a1.className += " tran";
  // 		}
  // 		setTimeout(() => {
  // 			move();
  // 		}, 200);
  // 		setTimeout(() => {
  // 			for (k = 1; k <= 4; k++) {
  // 				var a1 = document.getElementById(pagePrefix + k);
  // 				a1.classList.remove("tran");
  // 			}
  // 		}, 1400);
  // 	}
  // }










var left = document.getElementById("left");
var right = document.getElementById("right");

  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";



  left.onmousedown = () => {
  	//leftSlide();
    navigateUp();
  };

  right.onmousedown = () => {
  	//rightSlide();
    navigateDown();
  };

  // $(document).on("keydown", function(e) {
  // 	if (e.keyCode == 37) {
  // 		leftSlide();
  // 	} else if (e.keyCode == 39) {
  // 		rightSlide();
  // 	}
  // });



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
    if (scrolling) {
      e.preventDefault();
      return;
    }
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
      e.preventDefault();
    } else {
      navigateDown();
      e.preventDefault();
    }
  });


  // $(document).on("mousewheel DOMMouseScroll", function(e) {
  //   if (scrolling) return;
  //   if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
  //     navigateUp();
  //   } else {
  //     navigateDown();
  //   }
  // });
  //
  // $(document).on("keydown", function(e) {
  //   if (scrolling) return;
  //   if (e.which === 38) {
  //     navigateUp();
  //   } else if (e.which === 40) {
  //     navigateDown();
  //   }
  // });

});
