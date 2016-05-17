app.controller("developer-portfolio", ["$scope", "$routeParams", "$state",
	function($scope, $routeParams, $state) {

  $(function () { // wait for document ready
      // init
      var scrollController = new ScrollMagic.Controller();


      // define movement of panels
      var wipeAnimation = new TimelineMax()
        // animate scroll left:
        .to("#dev-portfolio-container", 1,   {x: "-8%"})  // move in to first panel

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
    $state.go('home.software');
  }

  $scope.showClockerMobileCaption = function () {
    $state.go('home.clockerMobile')
  }

  $scope.showMovieBuffCaption = function () {
    $state.go('home.movieBuff')
  }

  $scope.showTaskMasterCaption = function () {
    $state.go('home.taskMaster')
  }

  $scope.hideCaption = function () {
    $state.go('home.noCaption');
  }

  $scope.preventDefault = function() {
    event.preventDefault();
  }
	
}])
