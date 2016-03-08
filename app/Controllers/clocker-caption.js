app.controller("clocker-caption", ["$scope", "$routeParams", 
  function($scope, $routeParams) {
    console.log("clocker-caption controller loaded");

    $scope.$on("fadeInChange", function (event, args) {
      console.log("event", event);
      console.log("args:", args);
    });


  
  
  
}])
