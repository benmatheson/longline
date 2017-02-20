$(function(){
 var scene = new ScrollMagic.Scene({triggerElement:"#top-trigger", triggerHook: "onLeave", duration: 500})
 .setPin("#top", {pushFollowers: false}) 
  //.addIndicators({name: "1 (duration: 1200)"})
  .addTo(controller); 
});



//add a different triggerhook position - onenter or onleave
var controller = new ScrollMagic.Controller();