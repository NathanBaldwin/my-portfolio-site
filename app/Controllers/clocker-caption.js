app.controller("clocker-caption", ["$scope", "$routeParams", "$firebaseArray", 
  function($scope, $routeParams, $firebaseArray) {
    console.log("clocker-caption controller loaded");

    $scope.$on("fadeInChange", (event, args) => {
      console.log("event", event);
      console.log("args:", args);
    });


  
  
  
}])
