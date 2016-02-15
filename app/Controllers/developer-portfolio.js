app.controller("developer-portfolio", ["$scope", "$routeParams", "$firebaseArray", 
	function($scope, $routeParams, $firebaseArray) {

  $(function () { // wait for document ready
      // init
      var scrollController = new ScrollMagic.Controller();


      // define movement of panels
      var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 1,   {x: "-25%"})  // move in to first panel
        // animate to third panel
        .to("#slideContainer", 1,   {x: "-50%"})
        // animate to forth panel
        .to("#slideContainer", 1,   {x: "-75%"})

      new ScrollMagic.Scene({
          triggerElement: "#portfolio",
          triggerHook: "onLeave",
          duration: "500%"
        })
        .setPin("#portfolio")
        //.setPin("#pinContainer")
        //.setClassToggle("#portfolio-header", "fixed") 
        .setTween(wipeAnimation)
        //.setPin("#portfolio-header")
        //.addIndicators() // add indicators (requires plugin)
        .addTo(scrollController);
    });
	
}])
