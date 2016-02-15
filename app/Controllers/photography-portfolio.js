app.controller("photography-portfolio", ["$scope", "$routeParams", "$firebaseArray", 
	function($scope, $routeParams, $firebaseArray) {
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
      var gsapTarget = document.getElementById("slideContainer-photography");
      console.log("gsap target", gsapTarget);

      var pinContainer = document.getElementById("pinContainer");
      console.log("pinContainer", pinContainer);


      // define movement of panels
      var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer-photography", 1,   {x: "-25%"})  // move in to first panel
        // animate to third panel
        .to("#slideContainer-photography", 1,   {x: "-50%"})
        // animate to forth panel
        .to("#slideContainer-photography", 1,   {x: "-75%"})

      new ScrollMagic.Scene({
          triggerElement: triggerElement,
          triggerHook: "onLeave",
          duration: "500%"
        })
        .setPin("#portfolio")

        //.setClassToggle("#portfolio-header", "fixed") 
        .setTween(wipeAnimation)
        //.setPin("#portfolio-header")
        //.addIndicators() // add indicators (requires plugin)
        .addTo(scrollController);
    });
  
	
}])
