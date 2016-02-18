app.controller("developer-portfolio", ["$scope", "$routeParams", "$firebaseArray", "$state",
	function($scope, $routeParams, $firebaseArray, $state) {

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

  $scope.showCaption = () => {
    console.log("you hovered over bubba");
    $state.go('home.clocker');
    //console.log("angular.element('.clocker-caption')", angular.element('.clocker-caption'));
    //angular.element('.clocker-caption').addClass('fade-in')
  }
  
  $scope.addClass = () => {
    console.log("you clicked");
    $scope.fadeIn = true;
    $scope.$broadcast("fadeInChange", {fadeIn: $scope.fadeIn});
  }

  $scope.hideCaption = () => {
    console.log("you left!");
    $state.go('home.noCaption');
    //angular.element('.caption').removeClass('ease-in')
  }
	
}])
