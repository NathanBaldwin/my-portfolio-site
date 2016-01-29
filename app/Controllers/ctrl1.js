app.controller("home", ["$q", "$http", "$scope", "$firebaseArray", function($q, $http, $scope, $firebaseArray) {

// var current_frame = 0;
// var total_frames = 90;
// var path = new Array();
// var length = new Array();
// for(var i=0; i<2;i++){
//   path[i] = document.getElementById('i'+i);
//   //console.log("pat[i]", path[i]);
//   l = path[i].getTotalLength();
//   length[i] = l;
//   path[i].style.strokeDasharray = l + ' ' + l; 
//   path[i].style.strokeDashoffset = l;
// }
// var handle = 0;

// var draw = function() {
//    var progress = current_frame/total_frames;
//    if (progress > 1) {
//      window.cancelAnimationFrame(handle);
//    } else {
//     console.log("current_frame", current_frame);
//      current_frame++;
//      for(var j=0; j<path.length;j++){
//        path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
//      }
//      handle = window.requestAnimationFrame(draw);
//    }
// };
// draw();

const backSplash = document.getElementById("i0");
backSplash.style.strokeDasharray = backSplash.style.strokeDashoffset = backSplash.getTotalLength();
const signature = document.getElementById("i1");
signature.style.strokeDasharray = signature.style.strokeDashoffset = signature.getTotalLength();


const tl = new TimelineLite();

tl.to(backSplash, 2.3, {strokeDashoffset: 0})
.to(signature, 1.6, {strokeDashoffset: 0, delay: 0.0, ease: SlowMo.ease.config(0.3, 0.4, false)})
.from('.btn', 1.7, {opacity:0, delay: 0.3, ease: Power1.easeOut});




  // function draw() {
 //      var canvas = document.getElementById("canvas");
 //      if (canvas.getContext) {
 //        var ctx = canvas.getContext("2d");

 //        dashLen = 220,

 //        // we'll update this, initialize
 //        dashOffset = dashLen,

 //        // some arbitrary speed
 //        speed = 5,

 //        // the text we will draw
 //        txt = "STROKE-ON CANVAS",

 //        // start position for x and iterator
 //        x = 30, i = 0;

 //        ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif"; 

 //        // thickness of the line
 //        ctx.lineWidth = 5; 

 //        // to avoid spikes we can join each line with a round joint
 //        ctx.lineJoin = "round";

 //        // increase realism letting background (f.ex. paper) show through
 //        ctx.globalAlpha = 2/3;

 //        // some color, lets use a black pencil
 //        ctx.strokeStyle = ctx.fillStyle = "#000";

 //        (function loop() {
 //      // clear canvas for each frame
 //      ctx.clearRect(x, 0, 60, 150);

 //      // calculate and set current line-dash for this char
 //      ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);

 //      // reduce length of off-dash
 //      dashOffset -= speed;

 //      // draw char to canvas with current dash-length
 //      ctx.strokeText(txt[i], x, 90);

 //      // char done? no, the loop
 //      if (dashOffset > 0) requestAnimationFrame(loop);
 //      else {

 //        // ok, outline done, lets fill its interior before next
 //        ctx.fillText(txt[i], x, 90);

 //        // reset line-dash length
 //        dashOffset = dashLen;

 //        // get x position to next char by measuring what we have drawn
 //        // notice we offset it a little by random to increase realism
 //        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();

 //        // lets use an absolute transform to randomize y-position a little
 //        ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());

 //        // and just cause we can, rotate it a little too to make it even
 //        // more realistic
 //        ctx.rotate(Math.random() * 0.005);

 //        // if we still have chars left, loop animation again for this char
 //        if (i < txt.length) requestAnimationFrame(loop);
 //      }
 //    })();  // just to self-invoke the loop


 //      }
 //    }
 //    draw();



}]);
