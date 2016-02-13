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

      // create scene to pin and link animation
      new ScrollMagic.Scene({
          triggerElement: "#portfolio",
          triggerHook: "onLeave",
          duration: "500%"
        })
        .setPin("#pinContainer")
        .setClassToggle(".fix-it", "fixed") 
        .setTween(wipeAnimation)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(scrollController);
    });
	
}])
