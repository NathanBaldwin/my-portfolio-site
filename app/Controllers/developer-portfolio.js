app.controller("developer-portfolio", ["$scope", "$routeParams", "$state",
	function($scope, $routeParams, $state) {

  $(function () { // wait for document ready
      // init
      var scrollController = new ScrollMagic.Controller();


      // define movement of panels
      var wipeAnimation = new TimelineMax()
        // animate scroll left:
        .to("#dev-portfolio-container", 1,   {x: "-32%"})  // move in to first panel
        

        // animate to third panel
        // .to("#dev-portfolio-container", 1,   {x: "-50%"})
        // animate to forth panel
        // .to("#dev-portfolio-container", 1,   {x: "-75%"})

      new ScrollMagic.Scene({
          triggerElement: "#portfolio",
          triggerHook: "onLeave",
          duration: "100%"
        })
        .setPin("#portfolio")
        .setTween(wipeAnimation)
        .addTo(scrollController);
    });

  $scope.showCaption = function () {
    console.log("you hovered over bubba");
    $state.go('home.software');
  }


  $scope.hideCaption = function () {
    console.log("you left!");
    $state.go('home.noCaption');
  }
	
}])
