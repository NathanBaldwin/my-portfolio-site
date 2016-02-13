app.controller("home", ["$q", "$http", "$scope", "$firebaseArray", function($q, $http, $scope, $firebaseArray) {

//home page popopver on hover of homepage graphic:
  $scope.showPopover=false;
      
      $scope.popover = {
          title: 'Title',
          message: 'Message'
      };  

  const backSplash = document.getElementById("i0");
  backSplash.style.strokeDasharray = backSplash.style.strokeDashoffset = backSplash.getTotalLength();
  const signature = document.getElementById("i1");
  signature.style.strokeDasharray = signature.style.strokeDashoffset = signature.getTotalLength();


  const tl = new TimelineLite();

  tl.to(backSplash, 3, {strokeDashoffset: 0})
  .to(signature, 2.5, {strokeDashoffset: 0, delay: 0.0, ease: SlowMo.ease.config(0.3, 0.4, false)})
  .from('.sub-ttl', 1.7, {opacity:0, delay: 0.3, ease: Power1.easeOut});

  $scope.scrollToPortfolio = function() {
    console.log("you clicked scrollToPortfolio!");
    var portfolioSec = document.getElementById("portfolio");
    var posTop = portfolioSec.offsetTop;
    console.log("posTop", posTop);
    // TweenLite.to(window, 2, {scrollTo:{y:400}, ease:Power2.easeOut});
    TweenLite.to(window, 1.2, {scrollTo:{y:posTop}, ease:Power3.easeOut});
  }

}]);
