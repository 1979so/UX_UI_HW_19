console.log("Your index.js file is loaded correctly!");

// $("Logo").click(function(){
//     $(this).fadeToggle("slow", 0.5);
// })

// $("navbar-home").on("mouseenter", function(){
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

  

function mouseOver() {
  document.getElementById("logo").src =
    "../images/Logo.png";
  document.getElementById("logo").style.width = "40px";
}

function mouseOut() {
  document.getElementById("logo").src = "../images/Logo.png";
  document.getElementById("logo").style.width = "70px";
}

