app.controller("developer-portfolio", ["$scope", "$routeParams", "$state",
	function($scope, $routeParams, $state) {

  $(function () { // wait for document ready
      // init
      var scrollController = new ScrollMagic.Controller();


      // define movement of panels
      var wipeAnimation = new TimelineMax()
        // animate scroll left:
        .to("#dev-portfolio-container", 1,   {x: "-32%"})  // move in to first panel

      new ScrollMagic.Scene({
          triggerElement: "#portfolio",
          triggerHook: "onLeave",
          duration: "100%"
        })
        .setPin("#portfolio")
        .setTween(wipeAnimation)
        .addTo(scrollController);
    });

  $scope.showClockerCaption = function () {
    console.log("you hovered over bubba");
    $state.go('home.software');
  }

  $scope.showClockerMobileCaption = function () {
    $state.go('home.clockerMobile')
  }


  $scope.hideCaption = function () {
    console.log("you left!");
    $state.go('home.noCaption');
  }

  $scope.preventDefault = function() {
    event.preventDefault();
  }
	
}])
