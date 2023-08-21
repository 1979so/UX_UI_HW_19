console.log("Your index.js file is loaded correctly!");

// $("logo-home-gif").click(function(){
//     $(this).fadeToggle("slow", 0.5);
// })

// $("Logo").on("mouseenter", function(){
//     $(this).fadeIn("slow", 0.5); // Fade in on mouse enter
// });

// $("Logo").on("mouseleave", function(){
//     $(this).fadeOut("slow", 1);   // Fade out on mouse leave
// });

// $("Logo").hover(
//     function() {
//       $(this).fadeIn("fast"); // Fade in on mouse enter
//     },
//     function() {
//       $(this).fadeOut("fast"); // Fade out on mouse leave
//     }
//   );


$(document).ready(function(){
  $("Logo").hover(function(){
    $(this).fadeTo("fast", 0.5);
  }, function(){
    $(this).fadeTo("fast", 1);
  });
});
  