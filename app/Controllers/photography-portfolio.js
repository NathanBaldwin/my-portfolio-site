app.controller("photography-portfolio", ["$scope", "$routeParams", 
	function($scope, $routeParams) {
    console.log("photography-portfolio");

    // $scope.scrollToPortfolio = function() {
    // console.log("you clicked scrollToPortfolio!");
    var portfolioSec = document.getElementById("portfolio-scroll-anchor");
    var posTop = portfolioSec.offsetTop;
    console.log("posTop", posTop);
    // TweenLite.to(window, 2, {scrollTo:{y:400}, ease:Power2.easeOut});
    TweenLite.to(window, 0.5, {scrollTo:{y:posTop}, ease:Power3.easeOut});
  // }

    $(function () { // wait for document ready
      // init
      var scrollController = new ScrollMagic.Controller();

      var triggerElement = document.getElementById("portfolio");
      console.log("triggerElement", triggerElement);
      var gsapTarget = document.getElementById("photography-portfolio-container");
      console.log("gsap target", gsapTarget);

      var pinContainer = document.getElementById("pinContainer");
      console.log("pinContainer", pinContainer);


      // define movement of panels
      var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#photography-portfolio-container", 1,   {x: "-73%"})

      new ScrollMagic.Scene({
          triggerElement: "#portfolio",
          triggerHook: "onLeave",
          duration: "100%"
        })
        .setPin("#portfolio")

        //.setClassToggle("#portfolio-header", "fixed") 
        .setTween(wipeAnimation)
        //.setPin("#portfolio-header")
        //.addIndicators() // add indicators (requires plugin)
        .addTo(scrollController);
    });
  
	
}])
