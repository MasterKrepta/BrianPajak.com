// For Waka Time section
var btn = document.getElementById("btn-waka");
let wakaTime = document.getElementById('waka-img');

btn.addEventListener('click', function () {
  wakaTime.classList.toggle('active');
  var content = wakaTime.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";

  } else {
    content.style.display = "block";
  }
});


// for (i = 0; i < waka.length; i++) {
//   waka[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }