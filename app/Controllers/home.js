app.controller("home", ["$q", "$http", "$scope", "$state", function($q, $http, $scope, $state) {

//home page popopver on hover of homepage graphic:

$( document ).ready(function() {
    console.log( "ready!", Math.max($(document).height(), $(window).height()) );

    console.log("contact height:", $('#contact').height());
    console.log("technologies height:", $('#technologies').height());
 
  $scope.timer = "";
  $scope.appState ="";
      
  $scope.showNav = function () {
    if ($scope.timer === "complete") {
      $scope.appState='nav';
    }
  }

  $scope.showSubTitles = function () {
    if ($scope.timer === "complete") {
      $scope.appState = 'subtitles';
    }
  }
  
  const backSplash = document.getElementById("i0");
  backSplash.style.strokeDasharray = backSplash.style.strokeDashoffset = backSplash.getTotalLength();
  const signature = document.getElementById("i1");
  signature.style.strokeDasharray = signature.style.strokeDashoffset = signature.getTotalLength();


  const tl = new TimelineLite();

  tl.to(backSplash, 3, {strokeDashoffset: 0})
  .to(signature, 2.5, {strokeDashoffset: 0, delay: 0.0, ease: SlowMo.ease.config(0.3, 0.4, false)})
  // .from('.sub-ttl', 1.7, {opacity:0, delay: 0.3, ease: Power1.easeOut})
  .add(function () {
    console.log("animation complete");
    //wait for initial animation to complete before enabling subtitle hover:
    $scope.timer = 'complete';
    $scope.appState = 'subtitles';
    $scope.$apply();
  });

  $scope.scrollToPortfolio = function(time) {
    var scrollTime = time || 1.2;
    console.log("you clicked scrollToPortfolio!");
    var portfolioSec = document.getElementById("portfolio-scroll-anchor");
    var posTop = portfolioSec.offsetTop;
    console.log("posTop", posTop);
    // TweenLite.to(window, 2, {scrollTo:{y:400}, ease:Power2.easeOut});
    TweenLite.to(window, scrollTime, {scrollTo:{y:posTop}, ease:Power3.easeOut});
  }

  $scope.scrollToAbout = function (time) {
    var scrollTime = time || 0.9;
    console.log("you clicked scrollToPortfolio!");
    var portfolioSec = document.getElementById("about-me-section");
    var posTop = portfolioSec.offsetTop;
    console.log("posTop", posTop);
    // TweenLite.to(window, 2, {scrollTo:{y:400}, ease:Power2.easeOut});
    TweenLite.to(window, scrollTime, {scrollTo:{y:posTop}, ease:Power3.easeOut});
  }
  $scope.scrollToContact = function (time) {
    var scrollTime = time || 1.5;
    console.log("you clicked scrollToPortfolio!");
    var portfolioSec = document.getElementById("contact-anchor");
    var posTop = portfolioSec.offsetTop;
    console.log("posTop", posTop);
    // TweenLite.to(window, 2, {scrollTo:{y:400}, ease:Power2.easeOut});
    TweenLite.to(window, scrollTime, {scrollTo:{y:posTop}, ease:Power3.easeOut});
  }
  $scope.scrollToTechnologies = function (time) {
    console.log("you want to go to technologies");
    var scrollTime = time || 1.5;

    var docHeight = $(document).height();
    var contactHeight = $('#contact').innerHeight();
    var techHeight = $('#technologies').innerHeight();


    
    console.log("you clicked scrollToPortfolio!");
    var portfolioSec = document.getElementById("technologies");

    // var portfolioHeight = document.getElementById('height').scrollHeight;
    // console.log("portfolio height:", portfolioHeight);

    var posTop = (docHeight - (contactHeight + techHeight));

    // var posTop = portfolioSec.offsetTop;
    // console.log("combined height:", portfolioHeight + posTop);
    console.log("posTop", posTop);
    // TweenLite.to(window, 2, {scrollTo:{y:400}, ease:Power2.easeOut});
    TweenLite.to(window, scrollTime, {scrollTo:{y:posTop}, ease:Power3.easeOut});
  }

  $scope.testClick = function() {
    console.log("you clicked the link!");
  }

  $scope.photographyView = function() {
    //add logic to test whether timeout is needed on each click
    $scope.scrollToPortfolio(0.05);
    setTimeout(function () {
      $state.go('home.photography');
    }, 55);  
  }

  $scope.softwareView = function() {
    $scope.scrollToPortfolio(0.05);
    setTimeout(function () {
      $state.go('home.software');
    }, 55);
  }

  //fade in nav options at about me section:
  var fadeController = new ScrollMagic.Controller();
  
  var fadeInNav = new TimelineMax()
  .to('#clear-nav', 1,{ opacity: 1 });


  var fadein_scene = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 'onEnter',
    reverse: true
  })
  .setTween(fadeInNav)
  .addTo(fadeController);

  //fade out nav at contact section:
  var fadeout_tween = new TimelineMax()
  .to('#clear-nav', 1,{ opacity: 0 });

  var fadeout_scene = new ScrollMagic.Scene({
  triggerElement: '#fade-out-nav',
  triggerHook: 'onEnter',
  reverse: true
  })
  .setTween(fadeout_tween)
  .addTo(fadeController);

  // paralax effect for about me section:
  var paralaxController = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
          triggerElement: '#about-me-section',
          triggerHook: 'onEnter',
          // duration: '100%'
        }) 
        .setPin('#home')
        .addTo(paralaxController);


  //paralax effect for contact section:
  new ScrollMagic.Scene({
    triggerElement: "#trigger-z",
    triggerHook: "onLeave"
  })
    .setTween("#contact", 0, {className:"-=negative-z"})

    .addTo(paralaxController);
  


  });
}]);
