 /* Preloader after 3second adding none class and removing preloader*/
setTimeout(function(){ 
document.getElementById("loading").classList.add("none");
}, 3000);

// $(window).on('load', function(){
//     $('#wrapper').delay(700).fadeOut('slow', function(){
//         $("#loading").addClass("none");
//     });

// });